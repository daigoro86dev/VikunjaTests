import { Locator, Page } from '@playwright/test';
import EnvManger from '../utils/EnvManager';

export default class RegisterPage {
    private readonly page: Page;
    private readonly createAccountheader: Locator;
    private readonly usernameInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly createAccountButton: Locator;
    private readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createAccountheader = page.locator("h2.title", { hasText: "Create account" });
        this.usernameInput = page.locator("#username");
        this.emailInput = page.locator("#email");
        this.passwordInput = page.locator("#password");
        this.createAccountButton = page.locator("#register-submit");
        this.loginLink = page.getByRole("link", { name: "Login" });
    }

    async goToRegister() {
        await this.page.goto(`${EnvManger.GetBaseUrl()}/register`);
    }

    getCreateAccountheader() {
        return this.createAccountheader;
    }

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }

    async clickLoginLink() {
        await this.loginLink.click();
    }
}