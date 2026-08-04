const { BasePage } = require("./base.page");

class CartPage extends BasePage
{
    constructor(page)
    {
        super(page);

        //Text locator 
        this.cartItemsNames = page.locator("//div[@id='cart_info']/table/tbody/tr//td[@class='cart_description']/h4/a");
        this.cartItemsPrices = page.locator("//div[@id='cart_info']/table/tbody/tr//td[@class='cart_price']/p");
        this.cartItemsQuantity = page.locator("//div[@id='cart_info']/table/tbody/tr//td[@class='cart_quantity']/button");
        this.cartItemsTotalPrices = page.locator("//div[@id='cart_info']/table/tbody/tr/td/p[@class='cart_total_price']");
        this.dileveryAddressDetails = page.locator("//ul[@id='address_delivery']/li");

        //Button locator 
        this.proceedToCheckoutBtnLocator = page.locator("//a[@class='btn btn-default check_out']");
        this.placeOrderBtnLocator = page.locator("//a[@class='btn btn-default check_out']");
        this.deleteBtnLocator = page.locator("//td[@class='cart_delete']/a");
        this.signUpLoginBtnLocator = page.locator("//i[@class='fa fa-lock']/parent::a");
        this.loginBtnLocator = page.locator("//button[@data-qa='login-button']");

        //Link locator 
        this.popRegLoginLinkLocator = page.locator("//p[text()='Register / Login account to proceed on checkout.']/following-sibling::p/a");

        //Input locator 
        this.descriptionInputLocator = page.locator("//textarea");
        this.emailInputLocator = page.locator("//input[@data-qa='login-email']");
        this.passwordInputLocator = page.locator("//input[@data-qa='login-password']");

        //List locator 
        this.cartProductListLocator = page.locator("//tbody/tr[contains(@id,'product')]");
    }

    async getItemsInCart(){
        return await this.cartItemsNames.allTextContents();
    }
    async getItemsPriceFromCart(){
        return await this.cartItemsPrices.allTextContents();
    }
    async getItemsQuantityFromCart(){
        return await this.cartItemsQuantity.allTextContents();
    }
    async getItemsTotalPriceFromCart(){
        return await this.cartItemsTotalPrices.allTextContents();
    }
    async clickProceedToCheckoutBtn(){
        await this.proceedToCheckoutBtnLocator.click();
    }
    async clickRegLoginLink(){
        await this.popRegLoginLinkLocator.click();
    }
    async getDileveryAddressDetails(){
        const fullAddress = await this.dileveryAddressDetails.allTextContents();
        const address = fullAddress.slice(1).map(text => text.replace(/\s+/g, ' ').trim());
        return address;
    }
    async fillOrderDescription(descriptionText){
        await this.descriptionInputLocator.fill(descriptionText)
    }
    async clickPlaceOrderBtn(){
        await this.placeOrderBtnLocator.click();
    }
    async removeProductsFromCart(productNames){
        for(let product of productNames){
            await this.cartProductListLocator.filter({hasText: product}).locator("//td[@class='cart_delete']/a").click();
        }
    }
    async clickSignUpLoginBtn(){
        await this.signUpLoginBtnLocator.click();
    }
    async fillLoginForm(email,password){
        await this.emailInputLocator.fill(email);
        await this.passwordInputLocator.fill(password);
    }
    async clickLoginBtn(){
        await this.loginBtnLocator.click();
    }
}
module.exports={CartPage};