const {By} = require('selenium-webdriver');

class homePage 
{
    constructor(driver) 
    {
        this.driver = driver;
    }

    /////* SELECTORS */////
    async getSignInButton() 
    {
        return await this.driver.findElement(By.className("login"));
    }

    async getWomenButton() 
    {
        return await this.driver.findElement(By.className("sf-with-ul"));
    }

    async getBlouseButton() 
    {
        return await this.driver.findElement(By.xpath("//a[@title='Blouses']"));
    }

    /////* ACTIONS */////
    async clickSignIn() 
    {
        await (await this.getSignInButton()).click();
    }

    async hoverOverWomen() 
    {
        let womenButton = await this.getWomenButton();
        await this.driver.actions({ bridge: true }).move({ origin: womenButton }).perform();
    }

    async clickBlouseButton() 
    {
        await (await this.getBlouseButton()).click();
    }
}

module.exports = homePage;
