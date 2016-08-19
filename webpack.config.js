var path = require('path');
var webpack = require('webpack');
var config = require('webpack-manager')();

var PUBLIC_DIR = __dirname;
var SOURCE_DIR = path.join(__dirname, '/src');
var APP_DIR = path.join(__dirname, '/app');

// Environment specification
var IS_PROD = !~['dev', 'development'].indexOf(process.env.NODE_ENV);
var IS_DEV = !IS_PROD;

console.log('Build launched in', IS_DEV ? 'development' : 'production', 'mode');

// Shorthands
var alias = config.resolve.alias;
var plugin = config.plugins.add;
var loader = config.module.loaders.add;

config.context(SOURCE_DIR);
config.entry('index', './index');

config.output({
  path: APP_DIR,
  publicPath: '/app/',
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
    });
  }());
}

config.devServer({
  host: 'localhost',
  port: 8080,
  contentBase: PUBLIC_DIR,
  historyApiFallback: true
});

// Hot reload
config.devServer.hot(true);
plugin(function() {
  return new webpack.HotModuleReplacementPlugin();
}());

module.exports = config.setup();
