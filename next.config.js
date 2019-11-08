const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');


const nextConfig = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/contact': { page: '/contact' },
    '/lab': { page: '/lab' },
    '/projectAmaped': { page: '/projectAmaped' },
    '/projectBM': { page: '/projectBM' },
    '/projectMove': { page: '/projectMove' },
    '/projectNunc': { page: '/projectNunc' },
  }),
};

module.exports = withPlugins([
  [withCSS],
  [withFonts],
  [withImages],
], nextConfig);
