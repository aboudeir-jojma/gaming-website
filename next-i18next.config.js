// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',                   // ou 'fr' si tu veux, peu importe
    locales: ['en', 'fr', 'es', 'pt', 'de', 'it'],
  },
  localePath: './locales',
  localeDetection: false,                  // IMPORTANT: pas de redirection auto
};
