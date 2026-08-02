const { BasePage } = require("./base.page");

class PaymentPage extends BasePage
{
    constructor(page)
    {
        super(page);

        //Input locator
        this.nameInputLocator = page.locator("//input[@data-qa='name-on-card']");
        this.cardNumberInputLocator = page.locator("//input[@data-qa='card-number']");
        this.cvcInputLocator = page.locator("//input[@data-qa='cvc']");
        this.expiryMonthInputLocator = page.locator("//input[@data-qa='expiry-month']");
        this.expiryYearInputLocator = page.locator("//input[@data-qa='expiry-year']");

        //Button locator 
        this.payConfirmBtnLocator = page.locator("//button[@id='submit']");
        this.downloadInvoiceBtnLocator = page.locator("//a[text()='Download Invoice']");
        this.continueBtnLocator = page.locator("//a[text()='Continue']");

        //Text locator 
        this.orderPlaceSuccessMsg = page.locator("//h2[@data-qa='order-placed']/b");
    }

    async fillPaymentDetails(name,cardNumber,cvc,expiryMonth,expiryYear){
        await this.nameInputLocator.fill(name);
        await this.cardNumberInputLocator.fill(cardNumber);
        await this.cvcInputLocator.fill(cvc);
        await this.expiryMonthInputLocator.fill(expiryMonth);
        await this.expiryYearInputLocator.fill(expiryYear);
    }
    async clickPayConfirmBtn(){
        await this.payConfirmBtnLocator.click();
    }
    async getOrderSuccessMsg(){
        return await this.orderPlaceSuccessMsg.textContent();
    }
    async clickDownloadInvoiceBtn(){
        await this.downloadInvoiceBtnLocator.click();
    }
    async clickContinueBtn(){
        await this.continueBtnLocator.click();
    }
}
module.exports={PaymentPage};