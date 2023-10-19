const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When(/^I login with (.+) and (.*)$/, async (email, password) => {
    await LoginPage.login(email, password)
}); 

When(/^I click Login button$/, async () => {
    await LoginPage.btnLogin()
});

Then(/^I should see the name of my store (.*)$/, async (text) => {
    await expect(HomePage.StoreName).toBeExisting();
    await expect(HomePage.StoreName).toHaveTextContaining(text);
});

Then(/^I should see an error message (.*)$/, async (text) => {
    await expect(LoginPage.ErrorLoginPass).toBeExisting();
    await expect(LoginPage.ErrorLoginPass).toHaveTextContaining(text);
});