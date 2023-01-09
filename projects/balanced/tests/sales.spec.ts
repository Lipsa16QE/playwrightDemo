import { test, expect } from '@playwright/test';
import { App } from '../pages/app';
import { allure } from "allure-playwright";
import SalesInput from '../fixtures/invoices/salesInput';
import CommonUtils from '../utilities/commonUtils';
import {CREATE_SUCCESS_MSG,UPDATE_SUCCESS_MSG,ACTIVITY_UPDATE_MSG,ACTIVITY_CREATE_MSG,REVERT_SUCCESS_MSG} from '../constants/messages'


test.beforeEach(async ({ page }) => {
    let app = new App(page);
    await app.base.open();
  })

var salesinput=new SalesInput();
test.describe.configure({ mode: 'serial' });
test('create sales invoice:Draft', async ({ page }) => {
  allure.id('');
  let app = new App(page);
  await app.sidebar.goToInvoices();
  await app.sidebar.goToSalesInvoice();
  await app.salesPage.createSalesInvoice(salesinput,'draft');
  await expect(app.salesPage.successMessage).toHaveText(CREATE_SUCCESS_MSG);
  await expect(app.salesPage.statusDraft).toHaveText('draft');
  
});

test('create sales invoice:Unpaid', async ({ page }) => {
    allure.id('');
    let app = new App(page);
    await app.sidebar.goToInvoices();
    await app.sidebar.goToSalesInvoice();
    await app.salesPage.createSalesInvoice(salesinput,'unpaid');
    await expect(app.salesPage.successMessage).toHaveText(CREATE_SUCCESS_MSG);
    await expect(app.salesPage.statusUnpaid).toHaveText('unpaid');
  });

  test('Edit sales invoice', async ({ page }) => {
    allure.id('');
    let app = new App(page);
    await app.sidebar.goToInvoices();
    await app.sidebar.goToSalesInvoice();
    await app.salesPage.createSalesInvoice(salesinput,'unpaid');
    await expect(app.salesPage.successMessage).toHaveText(CREATE_SUCCESS_MSG);
    await app.salesPage.clickOnEdit();
    await app.salesPage.editInvoice();
    await expect(app.salesPage.successMessage).toHaveText(UPDATE_SUCCESS_MSG);
    await expect(app.salesPage.activityLog).toHaveText(ACTIVITY_UPDATE_MSG);

  });

  test('Duplicate sales Invoice', async ({ page }) => {
    allure.id('');
    let app = new App(page);
    await app.sidebar.goToInvoices();
    await app.sidebar.goToSalesInvoice();
    await app.salesPage.createSalesInvoice(salesinput,'unpaid');
    await expect(app.salesPage.successMessage).toHaveText(CREATE_SUCCESS_MSG);
    await app.salesPage.duplicateInvoice();
    await expect(app.salesPage.successMessage).toHaveText(CREATE_SUCCESS_MSG);
    await expect(app.salesPage.activityLog).toHaveText(ACTIVITY_CREATE_MSG);
  });

  test.only('Revert sales Invoice', async ({ page }) => {
    allure.id('');
    let app = new App(page);
    let utils=new CommonUtils();
    await app.sidebar.goToInvoices();
    await app.sidebar.goToSalesInvoice();
    await app.salesPage.createSalesInvoice(salesinput,'unpaid');
    await expect(app.salesPage.successMessage).toHaveText(CREATE_SUCCESS_MSG);
    let invoiceHeading=await app.salesPage.invoiceHeader.textContent();
    let invoiceNumber=utils.getInvoiceNumber(invoiceHeading);
    console.log(invoiceNumber)
    await app.salesPage.revertInvoice();
    await expect(app.salesPage.successMessage).toHaveText(REVERT_SUCCESS_MSG);
    await app.salesPage.filterInvoiceByNumber(invoiceNumber);
    let invoice=app.salesPage.rowSalesInvoiceNumber(invoiceNumber)
    await (await invoice).isVisible()
   
  });