var path = require('path');
var UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;

function jsMinification(config) {
  var uglifyOptions = require(path.resolve('config/uglifyjs'));
  config.plugins.add(new UglifyJsPlugin(uglifyOptions));
  return config;
};

module.exports = jsMinification;
