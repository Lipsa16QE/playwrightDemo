export default class CommonUtils {
 getInvoiceNumber(invoiceHeader:any) : any {
        let invoiceNumber= invoiceHeader.split(' ')[2];
        return invoiceNumber;
    }
}