import { data } from "../data/test-data";
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
        this.menTabLocator = page.locator("//a[@href='#Men']");
        this.tshirtsTabLocator = page.locator("//a[@href='/category_products/3']");
        this.handmBrandLocator = page.locator("//a[text()='H&M']");
        this.allenSollyJbrandLocator = page.locator("//a[text()='Allen Solly Junior']");
        this.cartTabLocator = page.locator("//i[@class='fa fa-shopping-cart']/parent::a/parent::li");
        this.popupContinueBtnLocator = page.locator("//div[@class='modal-footer']/button");
        this.reviewSubmitBtnLocator = page.locator("//button[@id='button-review']");


        //Link locator 
        this.viewCartConLinkLocator = page.locator("//div[@class='modal-body']//a[@href='/view_cart']");

        //Text locator
        this.productNameLocator = page.locator("//div[@class='product-information']/h2");
        this.productInfoListLocator = page.locator("//div[@class='product-information']/p");
        this.productPriceLocator = page.locator("//div[@class='product-information']/span/span");
        this.productsNameLocator = page.locator("//div[@class='single-products']/div/p");
        this.womenDressTextLocator = page.locator("//h2[@class='title text-center']");
        this.menTshirtsTextLocator = page.locator("//h2[@class='title text-center']");
        this.productTitlePage = page.locator("//h2[@class='title text-center']");
        this.reviewSuccessMsgLocator = page.locator("//div[@class='alert-success alert']/span[text()='Thank you for your review.']");

        //List locator
        this.productList = page.locator(".product-image-wrapper");
        this.brandTabListLocator = page.locator("//div[@class='brands-name']/ul/li");


        //Input locator 
        this.searchBarLocator = page.locator("//input[@id='search_product']");
        this.productQuantityInputLocator = page.locator("//input[@id='quantity']");
        this.reviewNameInputLocator = page.locator("//input[@id='name']");
        this.reviewEmailInputLocator = page.locator("//input[@id='email']");
        this.reviewInputLocator = page.locator("//textarea[@id='review']");
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
    async getWomenDressText(){
        return await this.womenDressTextLocator.textContent();
    }
    async clickMenTab(){
        await this.menTabLocator.click();
    }
    async clickTshirtsTab(){
        await this.tshirtsTabLocator.click();
    }
    async getMenTshirtsText(){
        return await this.menTshirtsTextLocator.textContent();
    }
    async clickHAndMBrandTab(){
        await this.handmBrandLocator.click();
    }
    async getProductPageTitle(){
        return await this.productTitlePage.textContent();
    }
    async clickAllenSollyBrandTab(){
        await this.allenSollyJbrandLocator.click();
    }
    async hoverAndAddProductsToCart(productsNames){
        for(let product of productsNames){
        const products = await this.productList.filter({hasText: product});
        await products.first().hover();
        await products.getByText('Add to cart').first().click();
        await this.popupContinueBtnLocator.click()
        }
    }
    async clickCartTab(){
        await this.cartTabLocator.click();
    }
    async fillReviewForm(name,email,review){
        await this.reviewNameInputLocator.fill(name);
        await this.reviewEmailInputLocator.fill(email);
        await this.reviewInputLocator.fill(review);
    }
    async clickReviewSubmitBtn(){
        await this.reviewSubmitBtnLocator.click()
    }
    async getReviewSuccessMsg(){
        return await this.reviewSuccessMsgLocator.textContent();
    }
}
module.exports={ProductPage};