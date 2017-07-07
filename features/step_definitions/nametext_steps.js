const {defineSupportCode} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const wd = require('wd');
const config = require('../config');

chai.use(chaiAsPromised);
chai.should();

defineSupportCode(function({Given, When, Then, After, Before}) {
  let driver;
  let nameText;
  let phoneText;
  let userTable;

  Before({timeout: 300 * 1000}, function () {
    driver = wd.promiseChainRemote(config.appium);

    return driver.init(config.Capabilities);
  });

  After(function () {
    return driver.quit();
  });

  Given('ผมเปิด Appium Test Server', () => {
    return driver.should.exist;
  });

  When('พิมพ์ {name} และพิมพ์ {phone}',
  (namevalue, phonevalue) => {
    nameText = driver.elementById('name');
    phoneText = driver.elementById('phone');
    return Promise.all([
      nameText.type(namevalue),
      phoneText.type(phonevalue)
    ]);
  });

  Then('ควรจะเห็น {name} และ {phone}',
  (name, phone) => {
    nameText.getValue().should.become(name);
    phoneText.getValue().should.become(phone);
    return;
  });
});
