import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { invalidUser, validUser } from '../../test-data/loginData';

test.describe('Login Tests', () => {
let loginPage: LoginPage;
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
});
test('user should login successfully with valid credentials', async () => {
    await loginPage.login(validUser.username, validUser.password);
    await expect(loginPage.inventoryList).toBeVisible();
});
test('user should see error message with invalid credentials', async () => {
    await loginPage.login(invalidUser.username, invalidUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
});
});