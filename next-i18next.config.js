const path = require('path');
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'pt', 'de', 'it', 'ja'],
    localeDetection: true,
    // 👇 Configuration pour la détection de langue en production
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  },
  localePath: path.resolve('./locales'),
  // 👇 Configuration pour la détection automatique
  detection: {
    order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie'],
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    cookieMinutes: 10080, // 7 jours
    cookieDomain: typeof window !== 'undefined' ? window.location.hostname : undefined,
  },
  // 👇 Important pour la production
  serializeConfig: false,
  trailingSlash: false,
};
