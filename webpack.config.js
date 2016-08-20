var path = require('path');
var webpack = require('webpack');
var config = require('webpack-manager')();

var PUBLIC_DIR = __dirname;
var SOURCE_DIR = path.resolve('./src');
var APP_DIR = path.resolve('./app');

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

{ // Aliasing app modules
  config.resolve.root([
    path.resolve('./src/components'),
    path.resolve('./src/modules'),
    path.resolve('./src/vendors'),
    path.resolve('./src/statics'),
    path.resolve('./bower_modules'),
    path.resolve('./node_modules')
  ]);

  alias({
    component: path.join(SOURCE_DIR, '/components'),
    module: path.join(SOURCE_DIR, '/modules'),
    vendor: path.join(SOURCE_DIR, '/vendors'),
    static: path.join(SOURCE_DIR, '/statics'),
    bower: path.resolve('./bower_modules'),
    node: path.resolve('./node_modules')
  });
};

{ // Solving Angular issues
  loader({
    test: /\/src\/components\/.*\.html$/,
    loader: 'ng-cache?exportId&prefix=src:/app/components/**'
  });

  // It's required only for obfuscated code. But it's included to
  // development build for greater reliability
  loader({ test: /\/src\/components\/.*\.js$/, loader: 'ng-annotate' });
};

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

config.module.noParse([
  path.resolve('./node_modules/angular/angular.js'),
  path.resolve('./node_modules/angular-route/angular-route.js')
]);

{ // Development server configuration
  config.devServer({
    host: process.env.WDS_HOST || 'localhost',
    port: process.env.WDS_PORT || 8080,
    contentBase: PUBLIC_DIR,
    historyApiFallback: true
  });

  // Hot reload
  config.devServer.hot(true);
  plugin(function() {
    return new webpack.HotModuleReplacementPlugin();
  }());
};

if (process.env.WDS_DASHBOARD) {
  plugin(function() {
    var DashboardPlugin = require('webpack-dashboard/plugin');
    return new DashboardPlugin();
  }());
}

module.exports = config.setup();
