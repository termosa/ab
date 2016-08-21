function processImages(config) {
  var limitSize = 4 /* kb */ * 1024;
  config.module.loaders.add({
    test: /\.(png|jpe?g|gif|svg)$/,
    include: /\/src\//,
    loader: 'url?' + [
      'limit=' + limitSize,
      'name=[path][name].[ext]'
    ].join('&')
  });
  // to avoid ugly path for third party components
  config.module.loaders.add({
    test: /\.(png|jpe?g|gif|svg)$/,
    include: /\/(node|bower)_modules\//,
    loader: 'url?' + [
      'limit=' + limitSize,
      'regExp=(node|bower)_modules/(.*)',
      'name=[path][name].[ext]'
    ].join('&')
  });
  return config;
}

module.exports = processImages;
