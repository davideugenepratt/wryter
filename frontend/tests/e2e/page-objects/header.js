/**
 * A Nightwatch page object. The page object name is the filename.
 *
 * Example usage:
 *   browser.page.homepage.navigate()
 *
 * For more information on working with page objects see:
 *   https://nightwatchjs.org/guide/working-with-page-objects/
 *
 */

module.exports = {
  elements: {
    welcomeLink: {
      selector: '.welcome-link',
    },
    loginText: {
      selector: '.login-text',
    },
  },
};
