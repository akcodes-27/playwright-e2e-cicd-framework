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
    }
})
const expect = base.expect;
module.exports = {test,expect};