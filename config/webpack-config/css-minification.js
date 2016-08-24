function cssMinification(config) {
  config.module.preLoaders.add({
    test: /\.css$/,
    loader: 'cssnano',
    query: { configFile: 'config/cssnano' }
  });
  return config;
}

module.exports = cssMinification;
