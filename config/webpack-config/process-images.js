function processImages(config) {
  var limitSize = 4 /* kb */ * 1024;
  config.module.loaders.add({
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: 'url?limit=' + limitSize + '&name=[path][name].[ext]'
  })
  return config;
}

module.exports = processImages;
