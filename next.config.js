/** @type {import('next').NextConfig} */
const nextConfig = {
  // retire cette ligne: output: 'export',
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
