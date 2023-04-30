import { Locator, Page } from '@playwright/test';
import EnvManger from '../utils/EnvManager';

export default class LoginPage {
    private readonly page: Page;
    private readonly usernameOrEmailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly forgetYourPasswordLink: Locator;
    private readonly stayLoggedCheckbox: Locator;
    private readonly loginButton: Locator;
    private readonly createAccountLink: Locator;
    private readonly missingUsernameErrorMessage: Locator;
    private readonly missingPasswordErrorMessage: Locator;
    private readonly wrongUsernameOrPasswordMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameOrEmailInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.forgetYourPasswordLink = page.locator(".reset-password-link");
        this.stayLoggedCheckbox = page.getByRole("checkbox");
        this.loginButton = page.getByRole("button", { name: "Login" } );
        this.createAccountLink = page.getByText("Create account");
        this.missingUsernameErrorMessage = page.getByText("Please provide a username.");
        this.missingPasswordErrorMessage = page.getByText("Please provide a password.");
        this.wrongUsernameOrPasswordMessage = page.getByText("Wrong username or password.");
    }

    async goToLoginPage() {
        await this.page.goto("/login", { waitUntil: "domcontentloaded" });
    }

    getMissingUsernameErrorMessage() {
        return this.missingUsernameErrorMessage;
    }

    getMissingPasswordErrorMessage() {
        return this.missingPasswordErrorMessage;
    }

    getWrongUsernameOrPasswordMessage() {
        return this.wrongUsernameOrPasswordMessage;
    }

    async enterUserNameOrEmail(usernameOrEmail: string) {
        await this.usernameOrEmailInput.fill(usernameOrEmail);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickForgetYourPasswordLink() {
        await this.forgetYourPasswordLink.click();
    }

    async checkStayLoggedCheckbox() {
        await this.stayLoggedCheckbox.check();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickCreateAccountLink() {
        await this.createAccountLink.click();
    }
}