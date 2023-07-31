import { Page } from '@playwright/test';
import { LAPTOPSLINK, MONITORSLINK, PHONELINK } from '../../fixtures/objectRepo/locators';
import { BasePage } from '../base.page';

export class SideBar extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get phonesLink() { return this.page.locator(PHONELINK) }
    get laptopsLink() { return this.page.locator(LAPTOPSLINK) }
    get monitorsLink() { return this.page.locator(MONITORSLINK) }

    async goToPhones() {
        await this.phonesLink.click();
    }
    async goToLaptops() {
        await this.laptopsLink.click();
    }
    async goToMonitors() {
        await this.laptopsLink.click();
    }

}