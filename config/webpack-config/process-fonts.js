function processFonts(config) {
  config.module.loaders.add({
    test: /\.(ttf|woff2?|eot)$/,
    include: /\/src\//,
    loader: 'file?name=[path][name].[ext]'
  })
  // to avoid ugly path for third party components
  config.module.loaders.add({
    test: /\.(ttf|woff2?|eot)$/,
    include: /\/(node|bower)_modules\//,
    loader: 'file?' + [
      'regExp=(node|bower)_modules/(.*)',
      'name=fontfaces/[2].[ext]'
    ].join('&')
  })
  return config;
}

module.exports = processFonts;
