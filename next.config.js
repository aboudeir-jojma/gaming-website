/** @type {import('next').NextConfig} */
const nextConfig = {
  // retire cette ligne: output: 'export',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
