function processAngularComponents(config) {
  var addLoader = config.module.loaders.add;

  addLoader({
    test: /\/src\/components\/.*\.html$/,
    loader: 'ng-cache?exportId&prefix=src:/app/components/**'
  });

  // It's required only for obfuscated code. But it's included to
  // development build for greater reliability
  addLoader({
    test: /\/src\/components\/.*\.js$/,
    loader: 'ng-annotate'
  });

  return config;
}

module.exports = processAngularComponents;
