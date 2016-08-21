function processHtmlDocuments(config) {
  config.module.loaders.add({
    test: /\.html$/,
    exclude: /\/src\/components\/.*\.html$/,
    loaders: [
      'file?name=[path][name].[ext]',
      'extract',
      'html'
    ]
  });

  return config;
}

module.exports = processHtmlDocuments;
