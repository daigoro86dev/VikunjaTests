import { test as base } from '@playwright/test';
import LoginPage from '../page-objects/LoginPage'
import PasswordResetPage from '../page-objects/PasswordResetPage';
import RegisterPage from '../page-objects/RegisterPage';
import OverviewPage from '../page-objects/OverviewPage';

type LoginFixture = {
    loginPage: LoginPage;
    overviewPage: OverviewPage;
    passwordResetPage: PasswordResetPage;
    registerPage: RegisterPage;
}

export const test = base.extend<LoginFixture>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    overviewPage: async ({ page }, use) => {
        await use(new OverviewPage(page));
    },
    passwordResetPage: async ({ page }, use) => {
        await use(new PasswordResetPage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
});

export { expect } from '@playwright/test';