const { By } = require('selenium-webdriver');

class loginPage
{
    constructor(driver)
    {
        this.driver = driver;
    }

    /////* SELECTORS */////
    async emailBox()
    {
        return await this.driver.findElement(By.id("email"));
    }

    async passwordBox()
    {
        return await this.driver.findElement(By.id("passwd"));
    }

    async signInButton()
    {
        return await this.driver.findElement(By.id("SubmitLogin"));
    }

    /////* ACTIONS */////
    async enterEmail(email)
    {
        await (await this.emailBox()).sendKeys(email);
    }

    async enterPassword(password)
    {
        await (await this.passwordBox()).sendKeys(password);
    }

    async clickSignIn()
    {
        await (await this.signInButton()).click();
    }
}

module.exports = loginPage;