function lintCss(config) {
  config.module.preLoaders.add({
    test: /\.css$/,
    include: /\/src\//,
    exclude: /\/src\/statics\//,
    loader: 'csslint?' + [
      'configFile=./config/csslintrc',
      'failOnWarning=false'
    ].join('&')
  });
}

module.exports = lintCss;
