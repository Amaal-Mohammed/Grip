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
import LoginPage from "../pages/loginpage"
import PasswordRecoveryPage from "../pages/passwordrecoverypage"
import Helpers from "../utilities/helpers"
import BrowserSetup from "../utilities/browsersetup"
import Constants from "../testdata/constants.json"


describe("Login TestSuite", () => {
	let driver: ThenableWebDriver

	before("Before", async () => {
		driver = BrowserSetup.getDriver();

	})
	afterEach(function () {
		Helpers.delay(5000)
		Helpers.takeScreenshotForFailedTests(driver, this.currentTest.title, this.currentTest.state)

	})

	after("After", async () => {
		await Helpers.delay(5000)
		await driver.quit()
	})
	it("Verify Next button is not enabled when user leave email empty", async () => {
		await driver.get(Constants.url)
		await Helpers.delay(5000);
		let actualresult = await LoginPage.getNextBtnIsEnabled(driver)
		assert.equal(logintestdata.ButtonIsNotactive, actualresult)

	})
	it("Verify Next button is not enabled when error message is displayed when user inserts invalid email", async () => {
		await LoginPage.setEmail(driver, logintestdata.invalidemail + Key.TAB)
		await Helpers.delay(1000)
		let actualresult = await LoginPage.getNextBtnIsEnabled(driver)
		let meg = await LoginPage.getEmailErrorInvalidEmailMsgstate(driver)
		assert.equal(logintestdata.ButtonIsNotactive, actualresult)
		assert.equal(logintestdata.errormegisdisplayed, meg)

	})
	it("Verify Next button is enabled when user inserts valid email", async () => {
		await Helpers.delay(5000);
		await LoginPage.clearEmailField(driver)
		await LoginPage.setEmail(driver, logintestdata.validemail)
		let actualresult = await LoginPage.getNextBtnIsEnabled(driver)
		assert.equal(logintestdata.ButtonIsactive, actualresult)
		await LoginPage.clearEmailField(driver)

	})
	it("Verify login  button is not enabled when password field is empty", async () => {

		await LoginPage.setEmail(driver, logintestdata.validemail)
		await LoginPage.clickNextBtn(driver)
		await Helpers.delay(2000);
		let actualresult = await LoginPage.getLogInBtnIsEnabled(driver)
		assert.equal(logintestdata.ButtonIsNotactive, actualresult)

	})

	it("Verify insert valid email and pssword for user not registered", async () => {

		await Helpers.delay(1000)
		await LoginPage.setPassword(driver, logintestdata.validpassword)
		await LoginPage.clickLoginBtn(driver)
		await Helpers.delay(2000)
		let msg = <Boolean>await LoginPage.getErrorInvalidEmailOrPasswordState(driver)
		await Helpers.delay(2000)
		assert.equal(logintestdata.errormegisdisplayed, msg)


	})


	it(" Verify click foregetpassword and Check send the link button ", async () => {

		await LoginPage.clickForgotPasswordLink(driver)
		await Helpers.delay(5000)
		let sendbtn = <Boolean>await PasswordRecoveryPage.getSendLinkstate(driver)
		assert.equal(logintestdata.ButtonIsdisplayed, sendbtn)

	})

	it(" Verify click foregetpassword and Click send button and password recovery message is displayed  ", async () => {

		await PasswordRecoveryPage.clickONSendLink(driver)
		let stn2 = await PasswordRecoveryPage.getPasswordRecoveryMsgState(driver)
		assert.equal(logintestdata.foregetpasswordMeg, stn2)

	})

	it("Verify when user click on back to login will be redirected back to the login page ", async () => {
		try {
			await PasswordRecoveryPage.clickBackToLogin(driver)

		} catch (error) {
			console.log(error)
		} finally {
			await Helpers.delay(5000)
			let currenturl = await driver.getCurrentUrl()
			assert.equal(logintestdata.loginurl, currenturl, "The login page is not opened")
		}




	})

	it("Verify User can Sign Up to create an account", async () => {

		LoginPage.scrollToSignUpPage(driver)
		await Helpers.delay(5000)
		let currenturl = await driver.getCurrentUrl()
		assert.equal(logintestdata.expectedsignupurl, currenturl, "The Sign up page is not opened")


	})




})