// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';
import { users } from './projects/balanced/users/adminUser';
import { App } from './projects/balanced/pages/app';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let app = new App(page);
  await app.base.open();
  await app.login.login(users.testAdmin.username,users.testAdmin.password);
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;