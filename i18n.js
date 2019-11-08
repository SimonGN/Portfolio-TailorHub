const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  fallbackLng: 'es',
  lng: 'es',
  allLanguages: ['es', 'en'],
  defaultLanguage: 'es',
  otherLanguages: ['en'],
  defaultNS: 'Home',
  initImmediate: true,
  preload: ['es', 'en'],
  localePath: 'static/locales',
  localeSubpaths: 'foreign',
});
