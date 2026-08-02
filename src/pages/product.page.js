import { BasePage } from "./base.page";

class ProductPage extends BasePage
{
    constructor(page)
    {
        super(page);

        //Button locator
        this.productTabLocator = page.locator('a[href="/products"]');
        this.viewProductBtnLocator = "a[href*='product_details']";
        this.searchBtnLocator = page.locator("//button[@id='submit_search']");
        this.addToCartBtn = ".btn btn-default add-to-cart";
        this.continueShoppingBtn = page.locator("//div[@class='modal-footer']/button");
        this.addToCartDtlsBtn = page.locator("//button[@class='btn btn-default cart']");

        //Link locator 
        this.viewCartConLinkLocator = page.locator("//div[@class='modal-body']//a[@href='/view_cart']");

        //Text locator
        this.productNameLocator = page.locator("//div[@class='product-information']/h2");
        this.productInfoListLocator = page.locator("//div[@class='product-information']/p");
        this.productPriceLocator = page.locator("//div[@class='product-information']/span/span");
        this.productsNameLocator = page.locator("//div[@class='single-products']/div/p");

        //Product-List locator
        this.productList = page.locator(".product-image-wrapper");

        //Input locator 
        this.searchBarLocator = page.locator("//input[@id='search_product']");
        this.productQuantityInputLocator = page.locator("//input[@id='quantity']");
    }

    async clickProductTab(){
        await this.productTabLocator.click();
    }
    async clickViewProductBtn(productName){
        await this.page.locator('.product-image-wrapper').filter({ hasText: productName }).locator(this.viewProductBtnLocator).click();
    }
    async searchProduct(productName){
        await this.searchBarLocator.fill(productName);
        await this.searchBtnLocator.click();
    }
    async hoverClickAddToCart(productName){
        const product = await this.productList.filter({ hasText: productName });
        await product.hover();
        await product.getByText('Add to cart').first().click();
    }
    async clickContinueBtn(){
        await this.continueShoppingBtn.click();
    }
    async clickViewCartLink(){
        await this.viewCartConLinkLocator.click();
    }
    async fillProductQuantity(productQuantity){
        await this.productQuantityInputLocator.clear();
        await this.productQuantityInputLocator.fill(productQuantity);
    }
    async clickAddToCartBtnDtls(){
        await this.addToCartDtlsBtn.click();
    }
}
module.exports={ProductPage};