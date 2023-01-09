import { test, expect } from '@playwright/test';
import { App } from '../pages/app';
import { allure } from "allure-playwright";
import { users } from '../users/adminUser';


test('Login to balanced', async ({ page }) => {
  allure.id('');
  let app = new App(page);
  await app.base.open();
  await expect(app.login.successMessage).toHaveText('Setup complete');
});