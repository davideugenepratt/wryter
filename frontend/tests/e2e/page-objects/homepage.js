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
  url: '/',
  commands: [],

  // A page object can have elements
  elements: {
    appContainer: '#app',
  },

  // Or a page objects can also have sections
  sections: {
    app: {
      selector: '#app',

      elements: {
        logo: 'textarea',
      },

      // - a page object section can also have sub-sections
      // - elements or sub-sections located here are retrieved using the "app" section as the base
      sections: {
        counter: {
          selector: '.word-count-goal',
        },

        unsplashImage: {
          selector: '.unsplash-image-container',

          elements: {
            image: {
              selector: 'img',
              index: 0,
            },
          },
        },
      },
    },
  },
};
