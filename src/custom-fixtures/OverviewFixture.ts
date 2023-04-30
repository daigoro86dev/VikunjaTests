import { test as base } from '@playwright/test';
import SharedContextClient from '../http-client/SharedContextClient';
import OverviewPage from '../page-objects/OverviewPage';
import LoginPage from '../page-objects/LoginPage';

type OverviewFixture = {
    loginPage: LoginPage;
    overviewPage: OverviewPage;
}

export const test = base.extend<OverviewFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await use(loginPage);
    },
    overviewPage: async ({ page }, use) => {
        const overviewPage = new OverviewPage(page);
        await overviewPage.goToOverviewPage();
        await use(overviewPage);
    },
});

export { expect } from '@playwright/test';