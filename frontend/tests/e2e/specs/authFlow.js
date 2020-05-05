// //////////////////////////////////////////////////////////////
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide
//
// For more information on working with page objects see:
//   https://nightwatchjs.org/guide/working-with-page-objects/
// //////////////////////////////////////////////////////////////

const testUsername = `test${new Date().getTime()}@test.com`;
const testPassword = 'StrongPassword1*';

module.exports = {
  beforeEach: (browser) => browser.init(),

  'Register using register form': (browser) => {
    const registerPage = browser.page.registerpage();

    registerPage.navigate();
    registerPage.waitForElementVisible('@appContainer');

    const { form } = registerPage.section.app.section;

    form.assert.elementCount('@username', 1);
    form.assert.elementCount('@password', 1);
    form.assert.elementCount('@submit', 1);
    form.assert.elementCount('@cancel', 1);

    form.setValue('@username', testUsername);
    form.setValue('@password', testPassword);
    form.setValue('@passwordConfirm', testPassword);
    form.click('@submit');

    browser.getLog('browser', function(logEntriesArray) {
      if (logEntriesArray.length) {
        console.log('Log length: ' + logEntriesArray.length);
        logEntriesArray.forEach(function(log) {
          console.log(
            '[' + log.level + '] ' + log.timestamp + ' : ' + log.message
          );
        });
      }
    });

    browser.end();
  },

  'Login using login form': (browser) => {
    const loginPage = browser.page.loginpage();
    const homePage = browser.page.homepage();
    const header = browser.page.header();

    loginPage.navigate();
    loginPage.waitForElementVisible('@appContainer');

    const { form } = loginPage.section.app.section;

    form.assert.elementCount('@username', 1);
    form.assert.elementCount('@password', 1);
    form.assert.elementCount('@login', 1);
    form.assert.elementCount('@register', 1);

    form.setValue('@username', testUsername);
    form.setValue('@password', testPassword);
    form.click('@login');

    homePage.waitForElementVisible('@appContainer');

    header.expect.element('@loginText').text.to.equal('Logout');

    browser.end();
  },
};
