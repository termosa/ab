var DefinePlugin = require('webpack').DefinePlugin;

function setEnvironment(config, env) {
  config.plugins.add(new DefinePlugin({
    IS_DEV: JSON.stringify(env === 'dev'),
    IS_PROD: JSON.stringify(env !== 'dev')
  }));
  return config;
}

module.exports = setEnvironment;
