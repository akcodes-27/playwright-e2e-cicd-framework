const base = require ('@playwright/test');
const {BasePage} = require('../pages/base.page');
const {HomePage} = require('../pages/home.page');
const { data } = require('../data/test-data');
const { ProductPage } = require('../pages/product.page');
const { CartPage } = require('../pages/cart.page');
const { Utils } = require('../utils/utils');
const { PaymentPage } = require('../pages/payment.page');


const test = base.test.extend({
    basePage: async({page},use)=>{
        await use(new BasePage(page));
    },
    homePage: async({page},use)=>{
        await use(new HomePage(page));
    },
    loggedIn: async({page},use)=>{
        const home = new HomePage(page);
        await home.launchPage();
        await home.clickSignupLoginBtn();
        await home.fillLoginForm(data.validUser.email,data.validUser.password);
        await home.clickLoginBtn();
        await use();
    },
    productPage: async({page},use)=>{
        await use(new ProductPage(page));
    },
    cartPage: async({page},use)=>{
        await use(new CartPage(page));
    },
    utils: async({page},use)=>{
        await use(new Utils(page));
    },
    paymentPage: async({page},use)=>{
        await use(new PaymentPage(page));
    },
    signUp: async({page},use)=>{
        const homePage = new HomePage(page);
        await homePage.launchPage();
        await expect(page).toHaveURL(data.url.homePageUrl);
        const pageTitle = await homePage.getPageTitle();
        expect(pageTitle).toBe(data.title.homePageTitle);
        await homePage.clickSignupLoginBtn();
        expect(page.locator(homePage.newUserSignupLocator)).toBeVisible();
        const utils = new Utils(page);
        const user = utils.generateRandomUser();
        await homePage.fillSignupForm(user.name,user.email);
        await homePage.clickSignupBtn();
        expect(page.locator(homePage.enterAccInfoLocator)).toBeVisible();
        expect(page.locator(homePage.accInfoEmailLocator)).toBeDisabled();
        await homePage.fillAccInfoForm(data.user.password,
            data.user.day,
            data.user.month,
            data.user.year);
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
        )
        await homePage.clickCreateAccBtn();
        const accCreatedMsg = await homePage.getAccResponseMsg();
        expect(accCreatedMsg).toBe(data.successResponse.accCreated);
        await homePage.clickContinueBtn();
        const logedUserName = await homePage.getLogedUserName();
        expect(logedUserName).toBe(user.name);
        await homePage.clickHomeTab(); 
        await use();
    }
})
const expect = base.expect;
module.exports = {test,expect};