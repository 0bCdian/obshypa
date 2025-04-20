terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 6.15.0"
    }
  }
  required_version = "~> 1.11.3"
}

provider "google" {
  project = var.project_id
  region  = var.region
}
