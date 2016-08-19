var path = require('path');

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
  }
};
