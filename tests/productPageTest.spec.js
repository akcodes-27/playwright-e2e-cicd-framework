import { test,expect } from "../src/fixtures/pages.fixtures";
import { data } from "../src/data/test-data";
import { HomePage } from "../src/pages/home.page";
test.describe('Product Page Test Suite',()=>{
    test('TC8: Verify All Products and product detail page',async({loggedIn,productPage,page})=>{
        await productPage.clickProductTab();
        await expect(page).toHaveURL(data.url.productPageUrl);
        let productList = productPage.productList;
        for(let i=0; i< await productList.count(); i++){
            await expect(productList.nth(i)).toBeVisible();
        }
        await productPage.clickViewProductBtn(data.products.product1);
        await expect(productPage.productNameLocator).toBeVisible();
        await expect(productPage.productPriceLocator).toBeVisible();
        let productInfo = productPage.productInfoListLocator;
        for(let i=0; i< await productInfo.count(); i++){
            await expect(productInfo.nth(i)).toBeVisible();
        }
        await page.waitForTimeout(5000);
    })
    test('TC9: Search Product',async({loggedIn,productPage,page})=>{
        await productPage.clickProductTab();
        let productList = productPage.productList;
        for(let i=0; i< await productList.count(); i++){
            await expect(productList.nth(i)).toBeVisible();
        }
        await productPage.searchProduct(data.products.searchProductMen);
        const productNames = await productPage.productsNameLocator.allTextContents();
        for(const product of productNames){
            expect(product.toLowerCase()).toMatch(/t[\s-]?shirts?/i);
        }
        await page.waitForTimeout(5000);  
    })
    test('TC21: Add review on product @new',async({homePage,productPage,page})=>{
        await homePage.launchPage();
        await homePage.clickProductTab();
        await productPage.clickViewProductBtn(data.products.product3);
        await productPage.fillReviewForm(data.validUser.name,data.validUser.email,data.products.description);
        await productPage.clickReviewSubmitBtn();
        expect(await productPage.getReviewSuccessMsg()).toBe(data.response.revSuccess);
        await page.waitForTimeout(3000);
    })
})