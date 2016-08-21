function ioConfiguration(config, srcDir, distDir) {
  config.context(srcDir);
  config.entry('index', './index');

  config.output.path(distDir);
  config.output.publicPath('/app/');
  config.output.filename('[name].js');
}

module.exports = ioConfiguration;
