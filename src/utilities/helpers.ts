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
export default{
    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    takeScreenshotForFailedTests(driver,testname,teststatus){
        let testCaseName: string = testname
		let testCaseStatus: string = teststatus

		if (testCaseStatus !== "passed") {

			driver.takeScreenshot().then((data) => {
				let screenshotPath = `src/Screenshots/${testCaseName}.png`;

				let imgfileName = `${testCaseName}.png`
				filesystem.writeFileSync(screenshotPath, data, 'base64');
			
			})

		}
    }
}