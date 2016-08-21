var path = require('path');

function skipProcessingVendors(config, rootDir) {
  var skipProcessing = function(relativePath) {
    var resolvedPath = path.resolve(rootDir, relativePath);
    config.module.noParse.add(resolvedPath);
  };

  skipProcessing('./node_modules/angular/angular.js');
  skipProcessing('./node_modules/angular-route/angular-route.js');

  return config;
}

module.exports = skipProcessingVendors;
