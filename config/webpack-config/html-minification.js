var path = require('path');
var options = require(path.resolve('config/htmlminifier'));

function htmlMinification(config) {
  config.module.preLoaders.add({
    test: /\.html$/,
    loader: 'html-minifier'
  });
  config.set('html-minifier-loader', options);
}

module.exports = htmlMinification;
