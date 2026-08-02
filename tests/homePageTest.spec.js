import { test,expect } from "../src/fixtures/pages.fixtures";
import { data } from "../src/data/test-data";
import { Utils } from "../src/utils/utils";
test.describe('Positive Test Cases',()=>{
    test('TC1: Register User',async({homePage,page})=>{
        await homePage.launchPage();
        await expect(page).toHaveURL(data.url.homePageUrl);
        const pageTitle = await homePage.getPageTitle();
        await expect(pageTitle).toBe(data.title.homePageTitle);
        await homePage.clickSignupLoginBtn();
        expect(page.locator(homePage.newUserSignupLocator)).toBeVisible();
        await homePage.fillSignupForm(data.user.name,data.user.email);
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
        expect(logedUserName).toBe(data.user.name);
        await homePage.clickDeleteAccBtn();
        const accDeletedMSg = await homePage.getAccResponseMsg();
        expect(accDeletedMSg).toBe(data.successResponse.accDeleted);
        await homePage.clickContinueBtn();
        await page.waitForTimeout(3000);
    })
    test.skip('TC2: Login User with correct email and password',async({homePage,page})=>{
        await homePage.launchPage();
        await expect(page).toHaveURL(data.url.homePageUrl);
        const pageTitle = await homePage.getPageTitle();
        await expect(pageTitle).toBe(data.title.homePageTitle);
        await homePage.clickSignupLoginBtn();
        expect(page.locator(homePage.loginToAccTextLocator)).toBeVisible();
        await homePage.fillLoginForm(data.validUser.email,data.validUser.password);
        await homePage.clickLoginBtn();
        expect(page.locator(homePage.logedInTabLocator)).toBeVisible();
        await homePage.clickDeleteAccBtn();
        const accDeletedMSg = await homePage.getAccResponseMsg();
        expect(accDeletedMSg).toBe(data.successResponse.accDeleted);
        await page.waitForTimeout(3000);
    })
    test('TC4: Logout User',async({homePage,page})=>{
        await homePage.launchPage();
        await expect(page).toHaveURL(data.url.homePageUrl);
        const pageTitle = await homePage.getPageTitle();
        await expect(pageTitle).toBe(data.title.homePageTitle);
        await homePage.clickSignupLoginBtn();
        expect(page.locator(homePage.loginToAccTextLocator)).toBeVisible();
        await homePage.fillLoginForm(data.validUser.email,data.validUser.password);
        await homePage.clickLoginBtn();
        await homePage.clickSignupLoginBtn();
        await expect(page).toHaveURL(data.url.loginPageUrl);
        await page.waitForTimeout(3000);
    })
    test.skip('TC6: Contact Us Form(code Failed)',async({homePage,page})=>{
        await homePage.launchPage();
        await expect(page).toHaveURL(data.url.homePageUrl);
        const pageTitle = await homePage.getPageTitle();
        await expect(pageTitle).toBe(data.title.homePageTitle);
        await homePage.clickContactUsTab();
        await homePage.fillContactUsForm(data.validUser.name,
            data.validUser.email,
            data.validUser.subject,
            data.validUser.msg,
            data.validUser.textFile
        );
        const dialogPromise = page.waitForEvent('dialog');
        await homePage.clickSubmitBtn();
        console.log('Submit clicked');
        const dialog = await dialogPromise;
        console.log(dialog.message());
        await dialog.accept();
        expect(page.locator(homePage.contactFormSuccessMsgLocator)).toHaveText(data.response.uploadSuccess);
        await homePage.clickHomeBtn();
        await expect(page).toHaveURL(data.url.homePageUrl);
        await page.waitForTimeout(5000);
    })
    test('TC10: Verify Subscription in home page',async({loggedIn,homePage,page})=>{
        await homePage.launchPage();
        await expect(page).toHaveURL(data.url.homePageUrl);
        await page.keyboard.press('End');
        await homePage.fillSubEmail(data.validUser.email);
        await expect(await homePage.getSubSuccessMsg()).toBe(data.response.subSuccess);
        await page.waitForTimeout(5000);  
    })
})
test.describe('Negative Test cases',()=>{
    test('TC3:  Login User with incorrect email and password',async({homePage,page})=>{
        await homePage.launchPage();
        await expect(page).toHaveURL(data.url.homePageUrl);
        const pageTitle = await homePage.getPageTitle();
        await expect(pageTitle).toBe(data.title.homePageTitle);
        await homePage.clickSignupLoginBtn();
        expect(page.locator(homePage.loginToAccTextLocator)).toBeVisible();
        await homePage.fillLoginForm(data.invalidUser.email,data.invalidUser.password);
        await homePage.clickLoginBtn();
        const errorMsg = await homePage.getLoginErrorMsg();
        expect(errorMsg).toBe(data.errorMsg.loginFormError);
        await page.waitForTimeout(3000);
    })
    test.skip('TC5: Register User with existing email',async({homePage,page})=>{
        await homePage.launchPage();
        await expect(page).toHaveURL(data.url.homePageUrl);
        const pageTitle = await homePage.getPageTitle();
        await expect(pageTitle).toBe(data.title.homePageTitle);
        await homePage.clickSignupLoginBtn();
        expect(page.locator(homePage.newUserSignupLocator)).toBeVisible();
        await homePage.fillSignupForm(data.validUser.name,data.validUser.email);
        await homePage.clickSignupBtn();
        const errorMsg = await homePage.getSignupErrorMsg();
        expect(errorMsg).toBe(data.errorMsg.signupFormError);
        await page.waitForTimeout(3000);
    })
})