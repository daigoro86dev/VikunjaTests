pipeline {
    agent any
    environment {
        ENV = 'prod'
    }
    stages {
        stage('e2e-tests') {
            agent { docker { image 'mcr.microsoft.com/playwright:v1.33.0-jammy' } }
            steps {
                sh 'npm install -g pnpm'
                sh 'pnpm install'
                sh 'pnpm run test --project=chromium'
            }
        }
    }
    post {
        always {
            allure results: [[path: './allure-report']]
        }
    }
}