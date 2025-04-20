variable "project_id" {
  type        = string
  description = "GCP project id"
}

variable "region" {
  type        = string
  description = "GCP project region region"
}

variable "repo_name" {
  type        = string
  description = "Name of the repo to allow wif in"
}
variable "repo_owner" {
  type        = string
  description = "Name of the repository owner in github"
}

variable "repo_owner_id" {
  type        = string
  description = "Id of the repo owner in github"
}
