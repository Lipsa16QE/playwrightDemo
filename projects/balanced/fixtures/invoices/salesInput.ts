

export default class SalesInput {
	public business: any;
	public customer: any;
	public account: any;
	public tag: any;
	public quantity: any;
	public unitPrice: any;
	public taxCode: any;

  constructor() {
    this.business = 'Toys Factory OÜ';
    this.customer = 'Watermelon S.p.a';
    this.account = '111005 Fixed assets';
    this.tag = 'QAAutomation';
    this.quantity = '20';
    this.unitPrice = '100';
    this.taxCode = 'Sales of metal';
  }
}
