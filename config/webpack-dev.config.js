var webpack = require('webpack');
var baseConfig = require('./webpack-config');
var config = require('webpack-manager')(baseConfig);
var setDevEnvironment = require('./webpack-config/set-dev-environment');

console.log('Build launched in DEVELOPMENT mode');

setDevEnvironment(config);
config.devtool('eval');
config.output.pathinfo(true);

module.exports = config.setup();
