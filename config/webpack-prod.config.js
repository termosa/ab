var webpack = require('webpack');
var baseConfig = require('./webpack-config');
var webpackManager = require('webpack-manager');
var jsMinification = require('./webpack-config/js-minification');
var setProdEnvironment = require('./webpack-config/set-prod-environment');
var extractStyles = require('./webpack-config/extract-styles');

console.log('Build launched in PRODUCTION mode');

var config = webpackManager(baseConfig);

config.entry('index', './index-prod');

extractStyles(config);
setProdEnvironment(config);
jsMinification(config);

module.exports = config.setup();
