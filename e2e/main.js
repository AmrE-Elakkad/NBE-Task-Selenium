const { Builder} = require('selenium-webdriver');
const assert = require("assert");
const homePage = require("../pages/homepage");
const loginPage = require("../pages/loginPage");
const blousesPage = require('../pages/blousesPage');
const productPage = require('../pages/productPage');
const checkoutPage = require('../pages/checkoutPage');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        let home = new homePage(driver);
        let login = new loginPage(driver);
        let blouses = new blousesPage(driver);
        let product = new productPage(driver);
        let checkout = new checkoutPage(driver);

        /////* VISIT WEBSITE */////
        await driver.get('http://www.automationpractice.pl/index.php');

        /////* GO TO SIGN IN PAGE */////
        await home.getSignInButton();
        await home.clickSignIn();

        /////* ENTER EMAIL AND PASSWORD */////
        await login.enterEmail("existing@gmail.com");
        await login.enterPassword("Password123");
        await login.clickSignIn();

        /////* HOVER OVER WOMEN AND CLICK ON BLOUSES */////
        await home.hoverOverWomen();
        await home.clickBlouseButton();

        /////* HOVER OVER ITEM AND CLICK MORE */////
        await blouses.itemBoxHover();
        await blouses.clickMoreButton();

        /////* CHANGE SIZE */////
        await product.clickSizeBox();
        await product.selectSize('L');
        await driver.navigate().refresh();

        /////* ASSERT QUANTITY IS 1 */////
        await product.waitForQuantityBox();
        assert.strictEqual(await product.getQuantityBoxValue(), '1');

        /////* ADD TO CART AND PROCEED*/////
        await product.clickAddToCart();
        await product.waitForProceedButton();
        await product.clickProceedToCheckout();
        
        /////* INCREASE QUANTITY IN CART */////
        await checkout.clickIncreaseQuantity();

    } finally {
        await driver.quit();
    }
}

example();