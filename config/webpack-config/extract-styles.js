var ExtractTextPlugin = require('extract-text-webpack-plugin');

function extractCss(config) {
  config.plugins.add(new ExtractTextPlugin('index.css'));
  config.module.postLoaders.add({
    test: /\.css$/,
    loaders: [ // it does not work without wrapping in array
      ExtractTextPlugin.extract({ fallbackLoader: 'style-loader' })
    ]
  });
  return config;
}

module.exports = extractCss;
