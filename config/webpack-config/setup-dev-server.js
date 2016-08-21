var DashboardPlugin = require('webpack-dashboard/plugin');
var env = process.env;

function setupDevServer(config, publicDir) {
  var addPlugin = config.plugins.add;

  config.devServer({
    host: env.WDS_HOST || 'localhost',
    port: env.WDS_PORT || 8080,
    contentBase: publicDir,
    historyApiFallback: true
  });

  // Hot reload
  config.devServer.hot(true);

  if (env.WDS_DASHBOARD) {
    addPlugin(new DashboardPlugin());
  }
}

module.exports = setupDevServer;
