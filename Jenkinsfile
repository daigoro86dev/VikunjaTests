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
                sh 'ALLURE_RESULTS_DIR=playwright-report pnpx playwright test'
            }
        }
        stage('archive') {
            agent any
            steps {
                archiveArtifacts artifacts: 'playwright-report', fingerprint: true
                allure results: [[path: 'playwright-report']]
            }
        }
    }
}