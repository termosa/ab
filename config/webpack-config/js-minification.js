var UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;

var uglifyOptions = {
  compress: {
    unsafe: false,
    warnings: false,
    passes: 2,

    sequences: true,
    properties: true,
    dead_code: true,
    drop_debugger: true,
    conditionals: true,
    comparisons: true,
    evaluate: true,
    booleans: true,
    loops: true,
    if_return: true,
    join_vars: true,
    cascade: true,
    negate_iife: true
  }
};

function jsMinification(config) {
  config.plugins.add(new UglifyJsPlugin(uglifyOptions));
  return config;
};

module.exports = jsMinification;
