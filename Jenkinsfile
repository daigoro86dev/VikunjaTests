pipeline {
    agent none
    environment {
        ENV = 'prod'
        ALLURE_RESULTS_DIR = 'playwright-report'
    }
    stages {
        agent { docker { image 'mcr.microsoft.com/playwright:v1.33.0-jammy' } }
        stage('e2e-tests') {
            steps {
                sh 'npm install -g pnpm'
                sh 'pnpm install'
                sh 'pnpm run test --project=chromium'
            }
        }
    }
    post {
        always {
            allure results: [[path: 'playwright-report']]
        }
    }
}