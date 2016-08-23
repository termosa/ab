var webpack = require('webpack');
var baseConfig = require('./webpack-config');
var webpackManager = require('webpack-manager');
var jsMinification = require('./webpack-config/js-minification');
var setProdEnvironment = require('./webpack-config/set-prod-environment');
var extractStyles = require('./webpack-config/extract-styles');
var htmlMinification = require('./webpack-config/html-minification');

console.log('Build launched in PRODUCTION mode');

var config = webpackManager(baseConfig);

config.entry('index', './index-prod');

extractStyles(config);
setProdEnvironment(config);
jsMinification(config);
htmlMinification(config);

module.exports = config.setup();
