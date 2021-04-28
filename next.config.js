const path = require('path');
const withCSS = require('@zeit/next-css');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS({
  distDir: '../build',

  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/dashboard': { page: '/dashboard' },
      '/meeting': { page: '/meeting' },
      '/profile': { page: '/profile' },
      '/404': { page: '/_error' },
    };
  },

  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
});
