const { By, until } = require('selenium-webdriver');

class productPage
{
    constructor(driver)
    {
        this.driver = driver;
    }

    /////* SELECTORS */////
    async sizeBox()
    {
        return await this.driver.findElement(By.className("selector"));
    }

    async quantityBox()
    {
        return await this.driver.findElement(By.id("quantity_wanted"));
    }

    async addToCartButton()
    {
        return await this.driver.findElement(By.id("add_to_cart"));
    }

    async proceedToCheckoutButton()
    {
        return await this.driver.findElement(By.className("btn btn-default button button-medium"));
    }

    /////* ACTIONS */////
    async clickSizeBox()
    {
        await (await this.sizeBox()).click();
    }

    async selectSize(size)
    {
        await (await this.driver.findElement(By.xpath("//select/option[contains(text(), '" + size + "')]"))).click();
    }

    async waitForQuantityBox()
    {
        await this.driver.wait(until.elementLocated(By.id("quantity_wanted")));
    }

    async getQuantityBoxValue()
    {
        await this.waitForQuantityBox();
        return await (await this.quantityBox()).getAttribute('value');
    }    

    async clickAddToCart()
    {
        await (await this.addToCartButton()).click();
    }

    async waitForProceedButton()
    {
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(By.className("btn btn-default button button-medium"))));
    }

    async clickProceedToCheckout()
    {
        await (await this.proceedToCheckoutButton()).click();
    }
}

module.exports = productPage;