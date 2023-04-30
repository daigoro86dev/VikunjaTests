pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.33.0-jammy' } }
    environment {
        ENV = 'prod'
        ALLURE_RESULTS_DIR = "playwright-report"
    }
    stages {
        stage('e2e-tests') {
            steps {
                sg 'npm install -g pnpm'
                sh 'pnpm install'
                sh 'pnpm run test --project=chromium'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/*', fingerprint: true
            script {
                allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'playwright-report']]
                ])
            }
        }
    }
}