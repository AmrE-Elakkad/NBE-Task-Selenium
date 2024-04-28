const { By, until } = require('selenium-webdriver');

class blousesPage
{
    constructor(driver)
    {
        this.driver = driver;
    }

    /////* SELECTORS */////
    async moreButton()
    {
        return await this.driver.findElement(By.className("button lnk_view btn btn-default"));
    }

    async itemBox()
    {
        return await this.driver.findElement(By.css("li.ajax_block_product.col-xs-12.col-sm-6.col-md-4"));
    }

    async itemBoxWait()
    {
        return await driver.wait(until.elementLocated(By.css('li.ajax_block_product.col-xs-12.col-sm-6.col-md-4')));
    }

    /////* ACTIONS */////
    async itemBoxHover()
    {
        let itemBox = this.itemBox();
        await this.driver.actions({ bridge: true }).move({ origin: itemBox }).perform();
    }

    async clickMoreButton()
    {
        await (await this.moreButton()).click();
    }
}

module.exports = blousesPage;