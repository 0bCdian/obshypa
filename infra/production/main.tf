locals {
  roles_runner_sa = {
    "run_admin"                   = "roles/run.admin"
    "secret_accessor_runner"      = "roles/secretmanager.secretAccessor"
    "service_account_user_runner" = "roles/iam.serviceAccountUser"
    "artifact_writer_runner"      = "roles/artifactregistry.writer"
    "artifact_reader_runner"      = "roles/artifactregistry.reader"
    "storage_object_user_runner"  = "roles/storage.objectUser"
    "workloadIdentityUser"        = "roles/iam.workloadIdentityUser"
  }
  roles_main_server_sa = {
    "datastore_user"       = "roles/datastore.user"
    "secret_accessor_main" = "roles/secretmanager.secretAccessor"
  }
}

resource "google_iam_workload_identity_pool" "pool" {
  project                   = var.project_id
  workload_identity_pool_id = "obshypa-pool"
  display_name              = "Obshypa pool"
  description               = "Pool to authenticate workloads coming from obshypa repo on github"
  disabled                  = false
}

resource "google_iam_workload_identity_pool_provider" "obshypa" {
  project                            = var.project_id
  workload_identity_pool_id          = google_iam_workload_identity_pool.pool.workload_identity_pool_id
  workload_identity_pool_provider_id = "github-provider-obshypa"

  display_name = "Github Obshypa"
  description  = "GitHub Actions identity pool provider obshypa's repo"
  disabled     = false

  attribute_mapping = {
    "google.subject"                = "assertion.sub"
    "attribute.actor"               = "assertion.actor"
    "attribute.aud"                 = "assertion.aud"
    "attribute.repository"          = "assertion.repository"
    "attribute.repository_owner_id" = "assertion.repository_owner_id"
    "attribute.ref_type"            = "assertion.ref_type"
    "attribute.ref"                 = "assertion.ref"
    "attribute.base_ref"            = "assertion.base_ref"
    "attribute.event_name"          = "assertion.event_name"
  }
  attribute_condition = <<EOT
  attribute.repository_owner_id == "${var.repo_owner_id}" &&
  attribute.repository == "${var.repo_owner}/${var.repo_name}"
EOT

  #   attribute_condition = <<EOT
  #     attribute.repository_owner_id == "${var.repo_owner_id}" &&
  #     attribute.repository == "${var.repo_owner}/${var.repo_name}" &&
  #     (
  #       (attribute.event_name == "push" && attribute.ref == "refs/heads/main") ||
  #       (attribute.event_name == "pull_request" && attribute.base_ref == "refs/heads/main")
  #     )
  # EOT
  #
  oidc {
    issuer_uri = "https://token.actions.githubusercontent.com"
  }

  depends_on = [
    google_iam_workload_identity_pool.pool
  ]
}


resource "google_service_account" "runner_sa" {
  project      = var.project_id
  account_id   = "obshypa-runner-gh-actions"
  display_name = "Obshypa GitHub Action Runner SA"
}

resource "google_service_account" "cloud_run_sa" {
  project      = var.project_id
  account_id   = "obshypa-main-server-sa"
  display_name = "Obshypa Cloud Run Main Server SA"
}

resource "google_service_account" "api_ingestor_sa" {
  project      = var.project_id
  account_id   = "obshypa-api-ingestor-sa"
  display_name = "Obshypa Cloud Run API Ingestor SA"
}

resource "google_project_iam_member" "runner_sa" {
  for_each = local.roles_runner_sa
  project  = var.project_id
  member   = "serviceAccount:${google_service_account.runner_sa.email}"
  role     = each.value
}

resource "google_project_iam_member" "api_ingestor_sa" {
  for_each = local.roles_main_server_sa
  project  = var.project_id
  member   = "serviceAccount:${google_service_account.api_ingestor_sa.email}"
  role     = each.value
}

resource "google_project_iam_member" "cloud_run_sa" {
  for_each = local.roles_main_server_sa
  project  = var.project_id
  member   = "serviceAccount:${google_service_account.cloud_run_sa.email}"
  role     = each.value
}

resource "google_service_account_iam_binding" "workload_identity_binding" {
  service_account_id = google_service_account.runner_sa.name
  role               = "roles/iam.workloadIdentityUser"
  members = [
    "principalSet://iam.googleapis.com/${google_iam_workload_identity_pool.pool.name}/attribute.repository/${var.repo_owner}/${var.repo_name}"
  ]
}

resource "google_project_service" "artifactregistry" {
  project            = var.project_id
  service            = "artifactregistry.googleapis.com"
  disable_on_destroy = false
}

resource "google_artifact_registry_repository" "obshypa" {
  location               = var.region
  repository_id          = "repo-obshypa"
  description            = "Docker repository for Obshypa application images"
  format                 = "DOCKER"
  cleanup_policy_dry_run = false
  docker_config {
    immutable_tags = true
  }
  cleanup_policies {
    id     = "keep-latest-three"
    action = "KEEP"
    most_recent_versions {
      keep_count = 3
    }
  }
}
