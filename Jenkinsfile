pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.33.0-jammy' } }
    environment {
        ENV = 'prod'
    }
    stages {
        stage('e2e-tests') {
            steps {
                sh 'npm install'
                sh 'npx playwright test --project=chromium'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/index.html', fingerprint: true
            publishHTML (
                target : [allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'VikunjaTestReport',
                reportTitles: 'Vikunja Tests']
            )
        }
    }
}