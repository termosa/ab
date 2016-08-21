var webpack = require('webpack');
var baseConfig = require('./webpack-config');
var config = require('webpack-manager')(baseConfig);
var jsMinification = require('./webpack-config/js-minification');
var setProdEnvironment = require('./webpack-config/set-prod-environment');

console.log('Build launched in PRODUCTION mode');

setProdEnvironment(config);
jsMinification(config);

module.exports = config.setup();
