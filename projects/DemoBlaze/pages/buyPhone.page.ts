import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { allure } from "allure-playwright";
import { ADDCART_BTN, PURCHASE_BTN, PLACEORDER_BTN } from "../fixtures/objectRepo/locators"

export class BuyPhone extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  //sales invoice elements
  get addToCartBtn() { return this.page.locator(ADDCART_BTN); }
  get purchaseBtn() { return this.page.locator(PURCHASE_BTN); }
  get placeOrderBtn() { return this.page.locator(PLACEORDER_BTN); }

  async phoneName(name: any) { return this.page.locator(`//a[normalize-space()="${name}"]`); }
  async userInputField(field: any) { return this.page.locator(`#${field}`); }




  async addToCard(name: any) {
    await (await this.phoneName(name)).click();
    await this.addToCartBtn.click()

  }

  async buyPhone(userDetails: any) {
    await this.placeOrderBtn.click();
    this.page.pause();
    await (await this.userInputField('name')).fill(userDetails.name);
    await (await this.userInputField('country')).fill(userDetails.country);
    await (await this.userInputField('city')).fill(userDetails.city);
    await (await this.userInputField('card')).fill(userDetails.creditCard);
    await (await this.userInputField('month')).fill(userDetails.month);
    await (await this.userInputField('year')).fill(userDetails.year);
    await this.purchaseBtn.click();

  }

}

