function lintJs(config) {
  config.module.preLoaders.add({
    test: /\.js$/,
    include: /\/src\//,
    exclude: /\/src\/statics\//,
    loader: 'eslint'
  });
  config.set('eslint', {
    failOnWarning: false,
    failOnError: true
  });
}

module.exports = lintJs;
