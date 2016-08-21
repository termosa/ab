var setEnvironment = require('./set-environment');

function setDevEnvironment(config) {
  return setEnvironment(config, 'prod');
}

module.exports = setDevEnvironment;
