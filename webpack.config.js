var path = require('path');
var webpack = require('webpack');
var config = require('webpack-manager')();

var SOURCE_DIR = path.join(__dirname, '/src');
var APP_DIR = path.join(__dirname, '/app');

// Environment specification
var IS_PROD = !~['dev', 'development'].indexOf(process.env.NODE_ENV);
var IS_DEV = !IS_PROD;

// Shorthands
var alias = config.resolve.alias;
var plugin = config.plugins.add;
var loader = config.module.loaders.add;

config.context(SOURCE_DIR);
config.entry('index', './index.js');

config.output({
  path: APP_DIR,
  filename: '[name].js'
});

config.devtool(IS_DEV ? 'eval' : null);

alias('module', path.join(SOURCE_DIR, '/modules'));
alias('component', path.join(SOURCE_DIR, '/components'));

// It's required only for obfuscated code. But it's included to
// development build for greater reliability
loader({ test: /\/components\/.*\.js$/, loaders: ['ng-annotate'] });

plugin(function() {
  return new webpack.DefinePlugin({
    IS_DEV: JSON.stringify(IS_DEV),
    IS_PROD: JSON.stringify(IS_PROD)
  });
}());

if (IS_PROD) {
  plugin(function() {
    return new webpack.optimize.UglifyJsPlugin({
      compress: {
        unsafe: false,
        warnings: true,

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
    });
  }());
}

module.exports = config.setup();
