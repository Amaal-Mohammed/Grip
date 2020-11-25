import "chromedriver"
import { Builder, ThenableWebDriver, By, Key, until, WebElement } from "selenium-webdriver"
import * as assert from "assert"
import logintestdata from "../TestData/login.json"
import { Keyboard } from "selenium-webdriver/lib/input";
import { TIMEOUT } from "dns";
import filesystem from 'fs';
import addContext from 'mochawesome/addContext'
import logReport from 'mochawesome-screenshots/logReport'
import { Console } from "console";
import Constants from "../testdata/constants.json"
export default{
    
    getDriver(){
        let driver: ThenableWebDriver
        driver = new Builder().forBrowser("chrome").build();
        return driver
    }
  
}