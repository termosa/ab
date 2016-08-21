var setEnvironment = require('./set-environment');

function setDevEnvironment(config) {
  return setEnvironment(config, 'dev');
}

module.exports = setDevEnvironment;
