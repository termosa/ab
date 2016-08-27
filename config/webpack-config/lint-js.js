function lintJs(config) {
  config.module.preLoaders.add({
    test: /\.js$/,
    include: /\/src\//,
    exclude: /\/src\/statics\//,
    loader: 'eslint'
  });
  config.set('eslint', {
    configFile: 'config/eslintrc.js',
    failOnWarning: false,
    failOnError: false
  });
}

module.exports = lintJs;
