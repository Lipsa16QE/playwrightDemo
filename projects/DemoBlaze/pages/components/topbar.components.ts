import { Page } from '@playwright/test';
import { CARTLINK, LOGINLINK } from '../../fixtures/objectRepo/locators';
import { BasePage } from '../base.page';

export class TopBar extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get loginLink() { return this.page.locator(LOGINLINK) }
    get cartLink() { return this.page.locator(CARTLINK) }


    async goToLogin() {
        await this.loginLink.click();
    }
    async goToCart() {
        await this.cartLink.click();
    }

}