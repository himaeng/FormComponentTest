const assert = require('assert');
const wd = require('wd');
const config = require('../config');

describe('Main form', function () {
  // Setting the maximum waiting time
  this.timeout(300000);
  let driver;

  before(function () {
    driver = wd.promiseChainRemote(config.appium);

    return driver.init(config.Capabilities);
  });

  after(function () {
    return driver.quit();
  });

  it('should enter a string to the input texts', () => {
    return driver
            .waitForElementById('name')
            .then((element) => {
              element
              .type('Crysfel Villa')
              .getValue()
              .then((result) => {
                result.should.equal('Crysfel Villa');
              })
            });

  });

  it('should show an alert with the email address', () => {
    // Find the email input
    return
          driver
            .waitForElementById('email')
            .then((element) => {
              element
                .clear()
                .type('crysfel@gmail.com')
                .hideKeyboard()

                .elementById('saveButton')
                .tab()
                .sleep(1000)

                .elementByXPath(`/XCUIElementTypeAlert[@name="User's data"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeStaticText[1]`)
                .getValue()
                .then((result => {
                  console.log(result);
                }))
            });
    // Type an email address
    // Hide the keyboard
    // Press the button
    // Validate that there's an alert message
  });
});
