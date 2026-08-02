class BasePage
{
    constructor(page)
    {
        this.page = page;
        this.path = '/';
    }
    async launchPage(){
        await this.page.goto(this.path);
    }
}
module.exports={BasePage};