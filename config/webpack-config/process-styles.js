function processStyles(config) {
  config.module.loaders.add({
    test: /\.css$/,
    loader: 'css'
  });
  return config;
}

module.exports = processStyles;
