var path = require('path');

var modulesRoots = [ // order matters for resolving
  { alias: 'component', path: './src/components' },
  { alias: 'module', path: './src/modules' },
  { alias: 'vendor', path: './src/vendors' },
  { alias: 'static', path: './src/statics' },
  { alias: 'bower', path: './bower_modules' },
  { alias: 'node', path: './node_modules' },
  { alias: 'style', path: './src/styles' },
  { alias: 'resource', path: './src/resources' }
];

function aliasingModules(config, rootDir) {
  modulesRoots.forEach(function(module) {
    var rootPath = path.resolve(module.path);

    config.resolve.root.add(rootPath);
    config.resolve.alias(module.alias, rootPath);
  });

  return config;
}

module.exports = aliasingModules;
