var path = require('path');

function processStyles(config) {
  var cssnanoOptions = require(path.resolve('config/cssnano'));
  config.module.loaders.add({
    test: /\.css$/,
    loader: 'css',
    query: cssnanoOptions
  });
  return config;
}

module.exports = processStyles;
