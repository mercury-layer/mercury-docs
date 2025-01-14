---
sidebar_position: 1
---

# gcloud Deployment

Running Mercury Layer on the cloud as a service


## Preliminaries

Before running this project, ensure the following are installed and set up:

1. **[google account](https://google.com)**
   Make sure you have a google account created
2. **[gcloud CLI](https://cloud.google.com/sdk/docs/install)**  
   Install and authenticate using your GCP account.
3. **[Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)**  
   Ensure Terraform is installed (version >= `1.8.3`).  

---

## 📋 Setup Instructions

1. Clone this repository to your local machine:

  ```bash
   git clone https://github.com/mercury-layer/mercurylayer-terraform terraform-mercurylayer
   cd terraform-mercurylayer
   ```

2. Change the default project ID inside variables.tf to your GCP project ID

  ```bash
  variable "project_id" {
    description = "The GCP project ID where all resources will be launched"
    type        = string
    default     = "mercury-441416"
  }
  ```

3. Running the Infra with Terraform CLI run the following

  ```bash
  terraform init
  terraform plan
  terraform apply
  ```
