const { BasePage } = require("./base.page");

class HomePage extends BasePage
{
    constructor(page)
    {
        super(page);
        //Button Locator 
        this.signupLoginBtnLocator = "//i[@class='fa fa-lock']/parent::a";
        this.signupBtnLocator = "//button[text()='Signup']";
        this.creatAccBtnLocator = "//button[text()='Create Account']";
        this.continueBtnLocator = "//div/a[text()='Continue']";
        this.deleteAccBtnLocator = "//i[@class='fa fa-trash-o']";
        this.contactUsTabLocator = "//i[@class='fa fa-envelope']/parent::a";
        this.submitBtnLocator = "//input[@value='Submit']";
        this.homeBtnLocator = "//a[@class='btn btn-success']";
        this.subBtnLocator = page.locator("#subscribe");
        this.cartTabLocator = page.locator("//i[@class='fa fa-shopping-cart']/parent::a/parent::li");
        this.viewProductBtnLocator = 'a:has-text("View Product")';
        this.popupContinueBtnLocator = page.locator("//div[@class='modal-footer']/button");

        //List locator 
        this.productBoxListLocator = page.locator(".product-image-wrapper");

        //Text Locator
        this.newUserSignupLocator = "//h2[text()='New User Signup!']";
        this.enterAccInfoLocator = "//h2/b[text()='Enter Account Information']";
        this.accResponseMsgLocator = "//h2/b";
        this.logedInUserNameLocator = "//li/a/b";
        this.loginToAccTextLocator = "//div[@class='login-form']/h2";
        this.logedInTabLocator = "//i[@class='fa fa-user']/parent::a";
        this.loginFormErrorLocator = "//input[@name='password']/following-sibling::p";
        this.signupFormErrorLocator = "//input[@data-qa='signup-email']/following-sibling::p";
        this.contactFormTitleLocator = "//div[@class='contact-form']/child::h2";
        this.contactFormSuccessMsgLocator = "//div[@class='status alert alert-success']";
        this.subSuccessMsgLocator = page.locator("#success-subscribe");
        this.viewProductBtnLocator = page.locator("");

        //Input Locator
        this.nameInputLocator = page.getByPlaceholder("Name");
        this.emailInputLocator = "//input[@data-qa='signup-email']";
        this.accInfoEmailLocator = "#email";
        this.passwordInputLocator = "#password";
        this.firstNameInputLocator = "#first_name";
        this.lastNameInputLocator = "#last_name";
        this.companyInputLocator = "#company";
        this.firstAddInputLocator = "#address1";
        this.secondAddInputLocator = "#address2";
        this.stateInputLocator = "#state";
        this.cityInputLocator = "#city";
        this.zipcodeInputLocator = "#zipcode";
        this.mobileNumberInputLocator = "#mobile_number";
        this.loginEmailInputLocator = "//input[@data-qa='login-email']";
        this.loginInputPasswordLocator = page.getByPlaceholder("Password");
        this.contactUsNameInputLocator = page.getByPlaceholder("Name");
        this.contactUsEmailInputLocator = "//input[@data-qa='email']";
        this.contactUsSubjectInputLocator = page.getByPlaceholder("Subject");
        this.contactUsMsgInputLocator = page.getByPlaceholder("Your Message Here");
        this.subEmailInputLocator = page.locator("#susbscribe_email");

        //Upload-Input Locator
        this.contactUsUploadInputLocator = "//input[@name='upload_file']";

        //Radio button Locator
        this.maleTitleLocator = "#id_gender1";
        this.femaleTitleLocator = "#id_gender2";
        this.loginBtnLocator = "//button[text()='Login']"

        //DropDown Locator
        this.dayValueLocator = "#days";
        this.monthValueLocator = "#months";
        this.yearValueLocator = "#years";
        this.countryInputLocator = "#country";

        //Checkbox Locator
        this.newsletterCheckBoxLocator = "#newsletter";
        this.recvOfferCheckBoxLocator = "#optin";
   
    }
   async getPageTitle(){
        return this.page.title();
    }
    async clickSignupLoginBtn(){
        await this.page.locator(this.signupLoginBtnLocator).click();
    }
    async fillSignupForm(name,email){
        await this.nameInputLocator.fill(name);
        await this.page.locator(this.emailInputLocator).fill(email);
    }
    async clickSignupBtn(){
        await this.page.locator(this.signupBtnLocator).click();
    }
    async fillAccInfoForm(password,day,month,year){
        await this.page.locator(this.maleTitleLocator).click();
        await this.page.locator(this.passwordInputLocator).fill(password);
        await this.page.locator(this.dayValueLocator).selectOption(day);
        await this.page.locator(this.monthValueLocator).selectOption(month);
        await this.page.locator(this.yearValueLocator).selectOption(year);
        await this.page.locator(this.newsletterCheckBoxLocator).click();
        await this.page.locator(this.recvOfferCheckBoxLocator).click();
    }
    async fillAddInfoForm(firstName,lastName,company,firstAddress,secondAddress,country,state,city,zipcode,mobileNumber){
        await this.page.locator(this.firstNameInputLocator).fill(firstName);
        await this.page.locator(this.lastNameInputLocator).fill(lastName);
        await this.page.locator(this.companyInputLocator).fill(company);
        await this.page.locator(this.firstAddInputLocator).fill(firstAddress);
        await this.page.locator(this.secondAddInputLocator).fill(secondAddress);
        await this.page.locator(this.countryInputLocator).selectOption(country);
        await this.page.locator(this.stateInputLocator).fill(state);
        await this.page.locator(this.cityInputLocator).fill(city);
        await this.page.locator(this.zipcodeInputLocator).fill(zipcode);
        await this.page.locator(this.mobileNumberInputLocator).fill(mobileNumber);
    }
    async clickCreateAccBtn(){
        await this.page.locator(this.creatAccBtnLocator).click();
    }
    async getAccResponseMsg(){
        return await this.page.locator(this.accResponseMsgLocator).textContent();
    }
    async clickContinueBtn(){
        await this.page.locator(this.continueBtnLocator).click();
    }
    async getLogedUserName(){
        return await this.page.locator(this.logedInUserNameLocator).textContent();
    }
    async clickDeleteAccBtn(){
        await this.page.locator(this.deleteAccBtnLocator).click();
    }
    async fillLoginForm(email,password){
        await this.page.locator(this.loginEmailInputLocator).fill(email);
        await this.loginInputPasswordLocator.fill(password);
    }
    async clickLoginBtn(){
        await this.page.locator(this.loginBtnLocator).click();
    }
    async getLoginErrorMsg(){
        return await this.page.locator(this.loginFormErrorLocator).textContent();
    }
    async getSignupErrorMsg(){
        return await this.page.locator(this.signupFormErrorLocator).textContent();
    }
    async clickContactUsTab(){
        await this.page.locator(this.contactUsTabLocator).click();
    }
    async fillContactUsForm(name,email,subject,message,uploadFile){
        await this.contactUsNameInputLocator.fill(name);
        await this.page.locator(this.contactUsEmailInputLocator).fill(email);
        await this.contactUsSubjectInputLocator.fill(subject);
        await this.contactUsMsgInputLocator.fill(message);
        await this.page.locator(this.contactUsUploadInputLocator).setInputFiles(uploadFile);
    }
    async clickSubmitBtn(){
        await this.page.locator(this.submitBtnLocator).click();
    }
    async clickHomeBtn(){
        await this.page.locator(this.homeBtnLocator).click();
    }
    async fillSubEmail(email){
        await this.subEmailInputLocator.fill(email);
        await this.subBtnLocator.click();
    }
    async getSubSuccessMsg(){
        const successMsg = this.subSuccessMsgLocator;
        await successMsg.waitFor({state: 'visible'});
        const text = await successMsg.textContent();
        return text?.trim();
    }
    async clickCartTab(){
        await this.cartTabLocator.click();
    }
    async clickViewProductBtn(productName){
       await this.productBoxListLocator.filter({hasText: productName}).getByRole('link', { name: /view product/i }).click();
    }
    // async getPageTitle(){
    //     return await this.page.title();
    // }
    async hoverAddProductsToCart(productNames){
        for(let product of productNames){
        const products = await this.productBoxListLocator.filter({hasText: product});
        await products.first().hover();
        await products.getByText('Add to cart').first().click();
        await this.popupContinueBtnLocator.click()
        }
    }
}
module.exports={ HomePage };