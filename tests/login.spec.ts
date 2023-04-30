import { test, expect } from '../src/custom-fixtures/LoginFixture';
import EnvManger from '../src/utils/EnvManager';

test.describe("Login Page Tests", () => {

  test.beforeAll(() => {
    EnvManger.LoadEnv();
  });

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
  });

  test("Successful Login With Email and Password", async ({ loginPage, overviewPage }, testInfo) => {
    testInfo.annotations.push({ type: 'test_id', description: '1' });
    testInfo.annotations.push({ type: 'test_key', description: 'LOGIN-1' });
    testInfo.annotations.push({ type: 'test_summary', description: 'Successful Login' });
    testInfo.annotations.push({ type: 'requirements', description: 'Environment Variables Loaded' });
    testInfo.annotations.push({ type: 'test_description', description: 'Successful Login With Email and Password' });

    const email = EnvManger.GetAdminEmail();
    const password = EnvManger.GetAdminPassword();

    await loginPage.enterUserNameOrEmail(email!);
    await loginPage.enterPassword(password!);
    await loginPage.checkStayLoggedCheckbox();
    await loginPage.clickLoginButton();
    await expect(overviewPage.getAddNewTaskTextArea()).toBeVisible();
  });

  test("Successful Login With Username and Password", async ({ loginPage, overviewPage }) => {
    const username = EnvManger.GetAdminName();
    const password = EnvManger.GetAdminPassword();

    await loginPage.enterUserNameOrEmail(username!);
    await loginPage.enterPassword(password!);
    await loginPage.clickLoginButton();
    await expect(overviewPage.getAddNewTaskTextArea()).toBeVisible();
  });

  test("Go To Password Reset Page", async ({ loginPage, passwordResetPage}) => {
    await loginPage.clickForgetYourPasswordLink();
    await expect(passwordResetPage.getResetYourPasswordHeader()).toBeVisible();
  });

  test("Go To Registration Page", async ({ loginPage, registerPage}) => {
    await loginPage.clickCreateAccountLink();
    await expect(registerPage.getCreateAccountheader()).toBeVisible();
  });

  test("Attempt to login without credentials", async ({ loginPage }) => {
    await loginPage.clickLoginButton();
    await expect(loginPage.getMissingUsernameErrorMessage()).toBeVisible();
    await expect(loginPage.getMissingPasswordErrorMessage()).toBeVisible();
  });

  test("Attempt to login with wrong credentials", async ({ loginPage }) => {
    await loginPage.enterUserNameOrEmail("wrong_username");
    await loginPage.enterPassword("wrong_password");
    await loginPage.clickLoginButton();
    await expect(loginPage.getWrongUsernameOrPasswordMessage()).toBeVisible();
  });

});
