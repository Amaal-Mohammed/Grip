import "chromedriver"
import { Builder, ThenableWebDriver, By, Key, until, WebElement } from "selenium-webdriver"
import * as assert from "assert"
import logintestdata from "../TestData/login.json"
import { Keyboard } from "selenium-webdriver/lib/input";
import { TIMEOUT } from "dns";
import filesystem from 'fs';
import addContext from 'mochawesome/addContext'
import logReport from 'mochawesome-screenshots/logReport'
export default {
    getEmail(driver){
        return driver.wait(until.elementLocated(By.name("email")), 10000)
    },
    setEmail(driver,email){
         driver.wait(until.elementLocated(By.name("email")), 10000).sendKeys(email)
    },
  
    clickNextBtn(driver){
      driver.wait(until.elementLocated(By.xpath("//button[@title='Next']")), 10000).click()
    },
    getNextBtnIsEnabled(driver){
      return driver.findElement(By.xpath("//button[@title='Next']")).isEnabled().valueOf()
    },
    getEmailErrorInvalidEmailMsgstate(driver){
      return driver.findElement(By.xpath("//div[@data-test-component='errorMessage__text text text--type-system3']")).isDisplayed().valueOf()
    },
    clearEmailField(driver){
      driver.findElement(By.name("email")).sendKeys(Key.CONTROL + "a" + Key.DELETE)
    },
    getLogInBtnIsEnabled(driver){
    return  driver.findElement(By.xpath("//button[@title='Log in']")).isEnabled().valueOf()
    },
   
    setPassword(driver,password){
      driver.wait(until.elementLocated(By.name("password")), 10000).sendKeys(password)
    },
    clickLoginBtn(driver){
      driver.wait(until.elementLocated(By.xpath("//button[@title='Log in']")), 10000).sendKeys(Key.ENTER)
    },
    getErrorInvalidEmailOrPasswordState(driver){
      return driver.findElement(By.xpath("//div[contains(text(),'Invalid email or password')]")).isDisplayed().valueOf()
    },
    clickForgotPasswordLink(driver){
      driver.wait(until.elementLocated(By.xpath("//a[@data-test-component='loginPage__passwordRecovery textLink link']")), 10000).click()
    },
    scrollToSignUpPage(driver){
      driver.executeScript("arguments[0].scrollIntoView(true);",  driver.wait(until.elementLocated(By.xpath("//button[@title='Sign up']")), 10000))
			driver.executeScript("arguments[0].click();",  driver.wait(until.elementLocated(By.xpath("//button[@title='Sign up']")), 10000))
		
    },
    getSignUpBtn(driver){
      return driver.wait(until.elementLocated(By.xpath("//button[@title='Sign up']")), 10000)
    }

}