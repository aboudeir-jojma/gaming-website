// next.config.js
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  experimental: {
    forceSwcTransforms: true,
  },
  skipTrailingSlashRedirect: true,

  // ✅ Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // autorise les CDN externes
      },
    ],
  },

  // ✅ Compression
  compress: true,
};
