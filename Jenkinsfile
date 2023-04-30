pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.33.0-jammy' } }
    environment {
        ENV = 'prod'
        ALLURE_RESULTS_DIR = "playwright-report"
        JAVA_HOME= "/opt/java/openjdk"
    }
    stages {
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
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            allure results: [[path: 'playwright-report']]
        }
    }
}