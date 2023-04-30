import { Locator, Page } from '@playwright/test';

export default class PasswordResetPage {
    private readonly page: Page;
    private readonly resetYourPasswordHeader: Locator;
    private readonly emailAddressInput: Locator;
    private readonly sendPasswordResetLinkButton: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resetYourPasswordHeader = page.getByText("Reset your password");
        this.emailAddressInput = page.locator("#email");
        this.sendPasswordResetLinkButton = page.getByRole("button", { name: "Send me a password reset link" });
        this.loginButton = page.getByRole("button", { name: "Login" })
    }

    getResetYourPasswordHeader() {
        return this.resetYourPasswordHeader;
    }
}