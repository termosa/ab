var path = require('path');
var webpack = require('webpack');

// Environment specification
var IS_PROD = !~['dev', 'development'].indexOf(process.env.NODE_ENV);
var IS_DEV = !IS_PROD;

module.exports = {
  context: './src',
  entry: {
    index: './index.js'
  },
  output: {
    path: path.join(__dirname, '/app'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      module: './modules'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(IS_DEV),
      IS_PROD: JSON.stringify(IS_PROD)
    })
  ],
  devtool: IS_DEV ? 'eval' : null
};
