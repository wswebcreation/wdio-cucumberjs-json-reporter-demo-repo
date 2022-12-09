const {Given, When, Then} = require('cucumber');
const cucumberJson = require( 'wdio-cucumberjs-json-reporter').default;

Given('I have {int} cukes in my belly', (cukeCount) => {
  // Attach a screenshot in a before hook
  cucumberJson.attach(browser.takeScreenshot(), 'image/png');
  // Attach a screenshot in a before hook
  cucumberJson.attach(browser.takeScreenshot(), 'image/png');
  // Attach a screenshot in a before hook
  cucumberJson.attach(browser.takeScreenshot(), 'image/png');
  return true
})
Given(/^I have a background$/, () => {
  browser.url('')
  return true;
});
When(/^the following table is transposed$/, (table) => {
  return true;
});

Given('there are {int} cucumbers', (initialCount) => {
  return true;
})

When('I eat {int} cucumbers', (eatCount) => {
  return true;
})

Then('I should have {int} cucumbers', (expectedCount) => {
  return true;
})
