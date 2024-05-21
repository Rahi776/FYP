terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket-morfaw"
    key            = "env-${var.env}/terraform.tfstate"
    region         = "us-west-1"    
    encrypt        = true
  }
}