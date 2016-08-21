function processStyles(config) {
  config.module.loaders.add({
    test: /\.css/,
    loaders: [
      'style',
      'css'
    ]
  });

  return config;
}

module.exports = processStyles;
