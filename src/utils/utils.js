class Utils
{
    constructor(page){
        this.page = page;
    }
    //Dialog-need a check test failed 
    async acceptDialog(){
        console.log('Registering dialog handler');
        this.page.once('dialog',async dialog =>{
        console.log('Dialog detected');
        console.log(dialog.message());
        await dialog.accept();
        })
    }
    //ScreenShot

    //GenerateRandomUser
    generateRandomUser(){
        const random = Date.now() + Math.floor(Math.random() * 1000);
        return{
            name: `TestUser${random}`,
            email: `testuser${random}@demo.com`,
            
        };
    }
}
module.exports={Utils};