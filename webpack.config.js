var path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/app'),
    filename: '[name].js'
  }
};
