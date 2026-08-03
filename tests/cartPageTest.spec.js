import { test,expect } from "../src/fixtures/pages.fixtures";
import { data } from "../src/data/test-data";
import { homedir } from "os";
test.describe('Cart Page Valiation',()=>{
    test('TC11: Verify Subscription in Cart page',async({loggedIn,homePage,cartPage,page})=>{
        await homePage.clickCartTab();
        await page.keyboard.press('End');
        await homePage.fillSubEmail(data.validUser.email);
        await expect(await homePage.getSubSuccessMsg()).toBe(data.response.subSuccess);
        await page.waitForTimeout(5000);
    })
    test('TC12: Add Products in Cart',async({homePage,productPage,cartPage,page})=>{
        await homePage.launchPage();
        await productPage.clickProductTab();
        await productPage.hoverClickAddToCart(data.products.product1);
        await productPage.clickContinueBtn();
        await productPage.hoverClickAddToCart(data.products.product2);
        await productPage.clickViewCartLink();
        expect(await cartPage.getItemsInCart()).toEqual([data.products.product1,data.products.product2]);
        expect(await cartPage.getItemsPriceFromCart()).toEqual([data.products.product1Price,data.products.producr2Price]);
        expect(await cartPage.getItemsQuantityFromCart()).toEqual([data.products.quantity,data.products.quantity]);
        expect(await cartPage.getItemsTotalPriceFromCart()).toEqual([data.products.product1Price,data.products.producr2Price]);
        await page.waitForTimeout(5000);
    })
    test('TC13: Verify Product quantity in Cart(without login)',async({homePage,productPage,cartPage,page})=>{
            await homePage.launchPage();
            await homePage.clickViewProductBtn(data.products.product1);
            expect(page).toHaveTitle(data.title.productDetailsPage);
            await productPage.fillProductQuantity(data.products.quantityDtls);
            await productPage.clickAddToCartBtnDtls();
            await productPage.clickViewCartLink();
            expect(await cartPage.getItemsInCart()).toEqual([data.products.product1]);
            expect(await cartPage.getItemsPriceFromCart()).toEqual([data.products.product1Price]);
            expect(await cartPage.getItemsQuantityFromCart()).toEqual([data.products.quantityDtls]);
            expect(await cartPage.getItemsTotalPriceFromCart()).toEqual([data.products.totalfx]);
            await page.waitForTimeout(5000);
    })
    test('TC14: Place Order: Register while Checkout(without login)',async({homePage,cartPage,utils,paymentPage,page})=>{
            await homePage.launchPage();
            await homePage.hoverAddProductsToCart([data.products.product1,
                data.products.product2,
                data.products.product4,
                data.products.product5,
                data.products.product10]);
            await homePage.clickCartTab();
            await expect(page).toHaveURL(data.url.cartPageUrl);
            await cartPage.clickProceedToCheckoutBtn();
            await cartPage.clickRegLoginLink();
            const user = utils.generateRandomUser();
            await homePage.fillSignupForm(user.name,user.email);
            await homePage.clickSignupBtn();
            await homePage.fillAccInfoForm(data.user.password,
                data.user.day,
                data.user.month,
                data.user.year
            );
            await homePage.fillAddInfoForm(data.userAddress.firstName,
                data.userAddress.lastName,
                data.userAddress.company,
                data.userAddress.firstAdd,
                data.userAddress.secondAdd,
                data.userAddress.country,
                data.userAddress.state,
                data.userAddress.city,
                data.userAddress.zipcode,
                data.userAddress.mobileNumber
            );
            await homePage.clickCreateAccBtn();
            const accCreatedMsg = await homePage.getAccResponseMsg();
            expect(accCreatedMsg).toBe(data.successResponse.accCreated);
            await homePage.clickContinueBtn();
            const logedUserName = await homePage.getLogedUserName();
            expect(logedUserName).toBe(user.name);
            await homePage.clickCartTab();
            await cartPage.clickProceedToCheckoutBtn();
            expect(await cartPage.getDileveryAddressDetails()).toEqual([data.userAddress.fullName,
                data.userAddress.company,
                data.userAddress.firstAdd,
                data.userAddress.secondAdd,
                data.userAddress.cityZipcode,
                data.userAddress.country,
                data.userAddress.mobileNumber
            ]);
            expect(await cartPage.getItemsInCart()).toEqual([data.products.product1,
                data.products.product2,
                data.products.product4,
                data.products.product5,
                data.products.product10
            ]);
            expect(await cartPage.getItemsPriceFromCart()).toEqual([data.products.product1Price,
                data.products.producr2Price,
                data.products.product4Price,
                data.products.producr5Price,
                data.products.producr10Price
            ]);
            expect(await cartPage.getItemsQuantityFromCart()).toEqual([data.products.quantity,
                data.products.quantity,
                data.products.quantity,
                data.products.quantity,
                data.products.quantity
            ])
            expect(await cartPage.getItemsTotalPriceFromCart()).toEqual([data.products.product1Price,
                data.products.producr2Price,
                data.products.product4Price,
                data.products.producr5Price,
                data.products.producr10Price,
                data.products.totalPrice
            ])
            await cartPage.fillOrderDescription(data.products.description);
            await cartPage.clickPlaceOrderBtn();
            await paymentPage.fillPaymentDetails(data.paymentDetails.name,
                data.paymentDetails.cardNumber,
                data.paymentDetails.cvc,
                data.paymentDetails.expiryMonth,
                data.paymentDetails.expiryYear
            );
            await paymentPage.clickPayConfirmBtn();
            expect(await paymentPage.getOrderSuccessMsg()).toEqual(data.response.orderSuccess);
            await paymentPage.clickDownloadInvoiceBtn();
            await paymentPage.clickContinueBtn();
    }) 
    test('TC15: Place Order: Register before Checkout',async({signUp,homePage,cartPage,utils,paymentPage,page})=>{
            await homePage.hoverAddProductsToCart([data.products.product1,
                data.products.product2,
                data.products.product4,
                data.products.product5,
                data.products.product10]);
            await homePage.clickCartTab();
            await expect(page).toHaveURL(data.url.cartPageUrl);
            await cartPage.clickProceedToCheckoutBtn();
            await cartPage.fillOrderDescription(data.products.description);
            await cartPage.clickPlaceOrderBtn();
            await paymentPage.fillPaymentDetails(data.paymentDetails.name,
                data.paymentDetails.cardNumber,
                data.paymentDetails.cvc,
                data.paymentDetails.expiryMonth,
                data.paymentDetails.expiryYear
            );
            await paymentPage.clickPayConfirmBtn();
            expect(await paymentPage.getOrderSuccessMsg()).toEqual(data.response.orderSuccess);
            await paymentPage.clickDownloadInvoiceBtn();
            await paymentPage.clickContinueBtn();
            await homePage.clickDeleteAccBtn();
            const accDeletedMSg = await homePage.getAccResponseMsg();
            expect(accDeletedMSg).toBe(data.successResponse.accDeleted);
            await page.waitForTimeout(2000);
    }) 
    test('TC17: Remove Products From Cart',async({homePage,cartPage,page})=>{
            await homePage.launchPage();
            await homePage.hoverAddProductsToCart([data.products.product4,data.products.product5]);
            await homePage.clickCartTab();
            const produtcsInCart = await cartPage.getItemsInCart();
            expect(produtcsInCart).toContain(data.products.product5);
            await cartPage.removeProductsFromCart([data.products.product5]);
            await page.waitForTimeout(2000);
            const updatedProductsInCart = await cartPage.getItemsInCart();
            expect(updatedProductsInCart).not.toContain(data.products.product5);
            await page.waitForTimeout(3000);
    })
})