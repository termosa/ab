var webpack = require('webpack');
var baseConfig = require('./webpack-config');
var config = require('webpack-manager')(baseConfig);
var setDevEnvironment = require('./webpack-config/set-dev-environment');
var inlineStyles = require('./webpack-config/inline-styles');

console.log('Build launched in DEVELOPMENT mode');

config.entry('index', './index-dev');

// It inlines styles while extracting for the production version
inlineStyles(config);

setDevEnvironment(config);
config.devtool('eval');
config.output.pathinfo(true);

module.exports = config.setup();
