variable "environment" {
  description = "Deployment environment (e.g., stg, prd)"
  type        = string
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
}

# Add any other variables you might need