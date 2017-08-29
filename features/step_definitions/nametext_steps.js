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
  let emailText;
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

  Given('ผู้ใช้ที่ชื่อว่า {name} และมีโทรศัพท์คือ {phone}',
    (nameValue, phoneValue) => {
      nameText = driver.elementById('name');
      phoneText = driver.elementById('phone');
      return Promise.all([
        nameText.type(nameValue),
        phoneText.type(phoneValue)
      ]);
    }
  );

  When('พิมพ์ {name} และพิมพ์ {phone}',
    (nameValue, phoneValue) => {
      nameText = driver.elementById('name');
      phoneText = driver.elementById('phone');
      return Promise.all([
        nameText.type(nameValue),
        phoneText.type(phoneValue)
      ]);
    }
  );

  When('กรอก {email}', (emailValue) => {
    emailText = driver.elementById('email');
    return emailText.type(emailValue);
  });

  Then('ควรจะเห็น {name} และ {phone}',
  (name, phone) => {
    nameText.getValue().should.become(name);
    phoneText.getValue().should.become(phone);
    return;
  });

  Then('ต้องเห็น {name}, {phone} และ {email}',
    (name, phone, email) => {
      nameText.getValue().should.become(name);
      phoneText.getValue().should.become(phone);
      emailText.getValue().should.become(email);
    }
  );
});
