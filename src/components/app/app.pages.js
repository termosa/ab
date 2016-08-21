var landingPage = require('landing-page');

module.exports = [
  { path: '/', route: landingPage }
];

module.exports.modules = [
  landingPage.module
];
