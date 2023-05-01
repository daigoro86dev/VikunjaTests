pipeline {
    agent any
    environment {
        ENV = 'prod'
        ALLURE_RESULTS_DIR = './allure-report'
    }
    stages {
        stage('e2e-tests') {
            agent { docker { image 'mcr.microsoft.com/playwright:v1.33.0-jammy' } }
            steps {
                sh 'npm install -g pnpm'
                sh 'pnpm install'
                sh 'pnpx playwright test'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: './allure-report', fingerprint: true
            allure results: [[path: './allure-report']]
        }
    }
}