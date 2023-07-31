import { test, expect } from '@playwright/test';
import { App } from '../pages/app';
import { allure } from "allure-playwright";
import UserDetails from '../fixtures/invoices/userDetails';
import CommonUtils from '../utilities/commonUtils';
import { } from '../constants/messages'
import { users } from '../users/adminUser';

test.beforeEach(async ({ page }) => {
  let app = new App(page);
  await app.base.open();
  await app.topbar.goToLogin();
  await app.login.login(users.testAdmin.username, users.testAdmin.password);
})
var userDetails = new UserDetails();
test.describe.configure({ mode: 'serial' });
test('Purchase a phone', async ({ page }) => {
  allure.id('');
  let app = new App(page);
  await app.sidebar.goToPhones();
  await app.buyPhone.addToCard('Samsung galaxy s6')
  await page.on('dialog', dialog => {
    console.log(dialog.message());
    dialog.accept();
  });
  await app.topbar.goToCart();

  let userdetails = new UserDetails();
  await app.buyPhone.buyPhone(userdetails);
  await page.on('dialog', dialog => {
    console.log(dialog.message());
    expect(dialog.message()).toBe('Thank you for your purchase!');
    dialog.accept();
  });
});
