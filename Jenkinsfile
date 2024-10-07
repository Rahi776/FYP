pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('docker-username') 
        DOCKER_PASSWORD = credentials('docker-password')
        AWS_ACCESS_KEY_ID = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        AWS_DEFAULT_REGION = 'ap-south-1'
    }

    // triggers {
    //     github(push: 'main')
    // }

    stages {
        stage('Checkout code') {
            steps {
                git branch: 'main', url: 'git@github.com:Rahi776/FYP.git'
                // Ensure the latest changes are always fetched
                sh 'git fetch --all'
                sh 'git reset --hard origin/main'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build || true'
                sh 'mkdir -p artifacts && mv public/* artifacts/'
            }
        }

        stage('Package') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-credentials-id', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh '''
                            echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                            docker build -t rahi776/fyp:latest .
                            docker push rahi776/fyp:latest
                        '''
                    }
                }
            }
        }


        stage('Terraform') {
            steps {
                sh '''
                    terraform -chdir=terraform init -backend-config=env/prd/backend-prd.tfvars -reconfigure
                    terraform -chdir=terraform plan -var-file=env/prd/prd.tfvars
                    terraform -chdir=terraform apply -var-file=env/prd/prd.tfvars -auto-approve
                '''
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                        aws eks update-kubeconfig --name prd-cluster --region ap-south-1
                        kubectl apply -f k8s_manifest/deploy.yaml
                        kubectl rollout restart deploy/fyp
                    '''
                }
            }
        }
    }
}
