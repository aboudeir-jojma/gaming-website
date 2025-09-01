// next.config.js
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n, // <- conf i18n unique et source de vérité
};
