function processEntryHtml(config) {
  config.module.loaders.add({
    test: /\/src\/index\-\w+\.html$/,
    loaders: [
      'file?name=index.html',
      'extract',
      'html'
    ]
  });
  return config;
}

module.exports = processEntryHtml;
