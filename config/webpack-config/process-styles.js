function processStyles(config) {
  config.resolve.extensions.add('.css');
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
