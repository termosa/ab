function processFonts(config) {
  config.module.loaders.add({
    test: /\.(ttf|woff2?|eot)$/,
    loader: 'file?name=fontfaces/[name]-[hash].[ext]'
  })
  return config;
}

module.exports = processFonts;
