import { expect, test } from '@playwright/test';

test('homepage should have correct title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});