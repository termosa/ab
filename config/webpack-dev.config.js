var webpack = require('webpack');
var baseConfig = require('./webpack-config');
var webpackManager = require('webpack-manager');
var setDevEnvironment = require('./webpack-config/set-dev-environment');
var inlineStyles = require('./webpack-config/inline-styles');
var lintJs = require('./webpack-config/lint-js');
var lintCss = require('./webpack-config/lint-css');
var lintHtml = require('./webpack-config/lint-html');

console.log('Build launched in DEVELOPMENT mode');

var config = webpackManager(baseConfig);

config.entry('index', './index-dev');

inlineStyles(config);
setDevEnvironment(config);
lintJs(config);
lintCss(config);
lintHtml(config);
config.devtool('eval');
config.output.pathinfo(true);

module.exports = config.setup();
