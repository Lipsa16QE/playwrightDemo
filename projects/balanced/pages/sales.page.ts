import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { allure } from "allure-playwright";

export class SalesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  //sales invoice elements
  get searchBusiness() {return this.page.locator('#invoice_search_business_id');}
  get addInvoiceButton() {return this.page.locator('a[href*="/invoices/new?transaction_type=sales_invoice"]');}
  get addBusiness(){return this.page.locator('#invoice-form_business_id');}
  get addCustomer(){return this.page.locator('#invoice-form_third_party_id');}
  get draftCheckBox(){return this.page.locator('#invoice-form_status');}
  get submitButton(){return this.page.locator('//button[contains(text(),"Save")]');}
  get successMessage(){return this.page.locator('.alert.alert-success');}
  get statusDraft(){return this.page.locator('.badge.badge-secondary');}
  get statusUnpaid(){return this.page.locator('.badge.badge-danger');}
  get accountContainer(){return this.page.locator('#select2-invoice-form_invoice_rows_0_account_id-container');}
  get arrow(){return this.page.locator('div[id="select2_business_id"] span[role="presentation"]');}
  get arrow2(){return this.page.locator('//div[@class="col-lg-2"]//b[@role="presentation"]');}
  get editButton(){return this.page.locator('a[href*="/edit?transaction_type=sales_invoice"]');}
  get activityLog(){return this.page.locator('//table[@class="table table-sm"]//tr[1]//td[1]');}
  get duplicateButton(){return this.page.locator('//span[contains(text(),"Duplicate")]');}
  get invoiceHeader(){return this.page.locator('//h1[contains(text(),"Invoice")]');}
  get voidButton() {return this.page.locator('#void-button');}
  get revertButton() {return this.page.locator('.btn.btn-sm.btn-outline-danger.float-right');}
  get revertStatus() {return this.page.locator('//*[contains(@id,"reverted")]');}

  
  //sales filter page element
  get salesInvoiceSearch(){return this.page.locator('#invoice-filter-form_invoice_number');}
  get statusTextBox(){return this.page.locator('div[id="select2_status"] input[role="textbox"]');}
  get filterButton(){return this.page.locator('//button[contains(text(),"Filter")]');}




  //Row Elements of sales invpice
  async accountSelector(rowCount:Number){return this.page.locator(`#invoice-form_invoice_rows_${rowCount}_account_id`);}
  async tagSelector(rowCount:Number){return this.page.locator(`#invoice-form_invoice_rows_${rowCount}_tags`);}
  async quantityInput(rowCount:Number){return this.page.locator(`//div[@class="form-group"]//input[@id="invoice-form_invoice_rows_${rowCount}_quantity"]`);}
  async unitPriceInput(rowCount:Number){return this.page.locator(`#invoice-form_invoice_rows_${rowCount}_unit_price`);}
  async taxCodeSelector(rowCount:Number){return this.page.locator(`#invoice-form_invoice_rows_${rowCount}_tax_code_id`);}
  async rowSalesInvoiceNumber(invoice:any){return this.page.locator(`//a[contains(text(),${invoice})]`);}
  //account_id-container
 

  async selectBusiness() {await this.searchBusiness.selectOption({label:"Toys Factory OÜ"});}
  async clickAddInvoice(){await this.addInvoiceButton.click();}
 
  async createSalesInvoice(invoice:any,invoiceType:String){
    await this.addInvoiceButton.click();
    await this.arrow.click();
    await this.addBusiness.selectOption({label:invoice.business},{force:true});
    await this.addCustomer.selectOption({label:invoice.customer},{force:true});
    await this.arrow2.click();
    await (await this.accountSelector(0)).selectOption({label:invoice.account},{force:true});
    await (await this.tagSelector(0)).selectOption({label:invoice.tag});
    await (await this.quantityInput(0)).fill(invoice.quantity);
    await (await this.unitPriceInput(0)).fill(invoice.unitPrice);
    await (await this.taxCodeSelector(0)).selectOption({label:invoice.taxCode});
    if (invoiceType === 'draft') {
      await this.draftCheckBox.check();
    }
    await this.submitButton.click();

  }

  async clickOnEdit(){await this.editButton.click();}

  async editInvoice() {
    await (await this.unitPriceInput(0)).click();
    await (await this.unitPriceInput(0)).fill('44');
    await this.submitButton.click();
  }

  async duplicateInvoice() {
    await this.duplicateButton.click();
    await (await this.unitPriceInput(0)).click();
    await this.submitButton.click({force:true});
  }

  async revertInvoice() {
    await this.revertButton.click();
    await this.voidButton.click();
  }

  async filterInvoiceByNumber(filterNumber:any){
    await this.statusTextBox.click();
    await this.revertStatus.click();
    await this.salesInvoiceSearch.click();
    await this.salesInvoiceSearch.fill(filterNumber);
    await this.filterButton.click();

  }

}

