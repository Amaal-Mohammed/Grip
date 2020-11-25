import "chromedriver"
import { Builder, ThenableWebDriver, By, Key, until, WebElement } from "selenium-webdriver"
import * as assert from "assert"
import logintestdata from "../TestData/login.json"
import { Keyboard } from "selenium-webdriver/lib/input";
import { TIMEOUT } from "dns";
import filesystem from 'fs';
import addContext from 'mochawesome/addContext'
import logReport from 'mochawesome-screenshots/logReport'
import { Driver } from "selenium-webdriver/chrome";
export default{
    getSendLinkstate(driver)
    {
        return driver.findElement(By.xpath("//button[@title='Send the link']")).isDisplayed().valueOf()
    },
    clickONSendLink(driver){
        driver.wait(until.elementLocated(By.xpath("//button[@title='Send the link']")), 10000).click()
    },
    getPasswordRecoveryMsgState(driver){
        let stn1 = driver.wait(until.elementLocated(By.xpath("//div[@data-test-component='passwordRecoveryPage__submitMessage']")), 10000)
       return stn1.isDisplayed().valueOf()
    },
    clickBackToLogin(driver){
        driver.wait(until.elementLocated(By.xpath("//a[@data-test-component='passwordRecoveryPage__goBack textLink link']")), 20000).click()
    }
}