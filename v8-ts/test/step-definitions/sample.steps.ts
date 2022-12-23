import { Before, Given, When, Then } from '@cucumber/cucumber';
import cucumberJson from 'wdio-cucumberjs-json-reporter';
import allureReporter from '@wdio/allure-reporter';

Given('I have {int} cukes in my belly', async (cukeCount) => {
  await browser.url('https://webdriver.io/');
  console.log('allureReporter = ', allureReporter);
  console.log('cucumberJson = ', cucumberJson);
  await cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
  return true;
});
Given(/^I have a background$/, () => {
  return true;
});
When(/^the following table is transposed$/, async (table) => {
  return true;
});

Given('there are {int} cucumbers', async (initialCount) => {
  return true;
});

When('I eat {int} cucumbers', async (eatCount) => {
  return true;
});

Then('I should have {int} cucumbers', async (expectedCount) => {
  return true;
});

Before(async () => {
  return true;
});
