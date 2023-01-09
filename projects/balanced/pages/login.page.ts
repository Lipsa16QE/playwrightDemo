import { Page } from '@playwright/test';
import { BasePage } from './base.page';



export class Login extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get userNameInput() {return this.page.locator('[id="user_email"]');}
  get passwordInput() {return this.page.locator('[id="user_password"]');}
  get signInButton() {return this.page.locator('button[type="submit"]');}
  get successMessage(){return this.page.locator('.alert.alert-success');}

  async login(username,password) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password)
    await this.signInButton.click();
}
}
