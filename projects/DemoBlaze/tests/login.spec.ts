import { expect } from '@playwright/test';
import { App } from '../pages/app';
import { allure } from "allure-playwright";
import { users } from '../users/adminUser';
import { test } from './testBase';
import { HOME_WELCOME_MSG } from '../constants/messages';

test('Login to Demoblaze', async ({ page, performance }) => {
  allure.id('');
  performance.sampleStart("Login_start");
  let app = new App(page);
  await app.base.open();
  await app.topbar.goToLogin();
  await app.login.login(users.testAdmin.username, users.testAdmin.password);
  page.pause();
  await expect(app.login.successMessage).toHaveText(HOME_WELCOME_MSG);
  performance.sampleEnd("Login_start");
});