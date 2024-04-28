const { By } = require('selenium-webdriver');

class checkoutPage
{
    constructor(driver)
    {
        this.driver = driver;
    }

    /////* SELECTORS */////
    async increaseQuantityButton()
    {
        return await this.driver.findElement(By.className("cart_quantity_up btn btn-default button-plus"));
    }

    /////* ACTIONS */////
    async clickIncreaseQuantity()
    {
        await (await this.increaseQuantityButton()).click();
    }
}

module.exports = checkoutPage;