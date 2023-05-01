pipeline {
    agent any
    environment {
        ENV = 'prod'
        ALLURE_RESULTS_DIR = 'playwright-report'
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
        stage('archive') {
            steps {
                archiveArtifacts artifacts: 'playwright-report', fingerprint: true
            }
        }
    }
    post {
        always {
            allure results: [[path: 'playwright-report']]
        }
    }
}