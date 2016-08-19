var path = require('path');
var webpack = require('webpack');
var config = require('webpack-manager')();

// Environment specification
var IS_PROD = !~['dev', 'development'].indexOf(process.env.NODE_ENV);
var IS_DEV = !IS_PROD;

// Shorthands
var alias = config.resolve.alias;
var plugin = config.plugins.add;

config.context('./src');
config.entry('index', './index.js');

config.output({
  path: path.join(__dirname, '/app'),
  filename: '[name].js'
});

config.devtool(IS_DEV ? 'eval' : null);

alias('module', './modules');

plugin(function() {
  return new webpack.DefinePlugin({
    IS_DEV: JSON.stringify(IS_DEV),
    IS_PROD: JSON.stringify(IS_PROD)
  });
}());

module.exports = config.setup();
