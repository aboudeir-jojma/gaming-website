const path = require('path');
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'pt', 'de', 'it'],
  },
  localePath: path.resolve('./locales'),
  localeDetection: false,
};
