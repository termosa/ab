function lintHtml(config) {
  config.module.preLoaders.add({
    test: /\.html$/,
    include: /\/src\//,
    exclude: /\/src\/statics\//,
    loader: 'htmlhint'
  });
  config.set('htmlhint', {
    configFile: 'config/htmlhintrc',
    failOnWarning: false,
    failOnError: true
  });
}

module.exports = lintHtml;
