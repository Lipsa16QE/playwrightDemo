import { Page } from '@playwright/test';
import { BasePage } from '../base.page';

export class SideBar extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get invoicesLink() {return this.page.locator('//a[normalize-space()="Invoices"]')}
    get salesLink() {return this.page.locator('a[href*="/invoices?transaction_type=sales_invoice"]')}


   async goToInvoices() {
        await this.invoicesLink.click();
   }

   async goToSalesInvoice() {
    await this.salesLink.click();
    }
}