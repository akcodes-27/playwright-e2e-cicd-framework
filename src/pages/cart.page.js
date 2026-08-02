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
        
        //Link locator 
        this.popRegLoginLinkLocator = page.locator("//p[text()='Register / Login account to proceed on checkout.']/following-sibling::p/a");

        //Input locator 
        this.descriptionInputLocator = page.locator("//textarea");
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
}
module.exports={CartPage};