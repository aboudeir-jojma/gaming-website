const path = require('path');
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'pt', 'de', 'it', 'ja'],
  },
  localePath: path.resolve('./locales'),
  localeDetection: true,
  // 👇 Ajoute ceci
  trailingSlash: false,
};
