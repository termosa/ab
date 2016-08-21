function inlineStyles(config) {
  config.module.postLoaders.add({
    test: /\.css$/,
    loader: 'style'
  });
  return config;
}

module.exports = inlineStyles;
