pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "portfolio-app"
        CONTAINER_NAME = "portfolio-container"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t ${DOCKER_IMAGE}:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Stop and remove existing container if it exists
                sh 'docker rm -f ${CONTAINER_NAME} || true'
                // Run new container
                sh 'docker run -d --name ${CONTAINER_NAME} --restart=always -p 80:80 ${DOCKER_IMAGE}:latest'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Verifying deployment...'
                sh 'sleep 5 && docker ps | grep ${CONTAINER_NAME}'
            }
        }
    }

    post {
        success {
            echo '========================================='
            echo ' SUCCESS! Portfolio is now LIVE!'
            echo '========================================='
        }
        failure {
            echo '========================================='
            echo ' FAILED! Check the logs above.'
            echo '========================================='
        }
    }
}
