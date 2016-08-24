function processStyles(config) {
  config.module.loaders.add({
    test: /\.css$/,
    loader: 'css?-minimize'
  });
  return config;
}

module.exports = processStyles;
