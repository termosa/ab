var path = require('path');
var webpack = require('webpack');
var config = require('webpack-manager')();
var ioConfiguration = require('./io-configuration');
var aliasingModules = require('./aliasing-modules');
var processAngularComponents = require('./process-angular-components');
var setupDevServer = require('./setup-dev-server');
var skipProcessingVendors = require('./skip-processing-vendors');
var processHtmlDocument = require('./process-html-documents');

var ROOT_DIR = path.resolve('./');
var PUBLIC_DIR = ROOT_DIR;
var SOURCE_DIR = path.resolve('./src');
var DIST_DIR = path.resolve('./dist');

ioConfiguration(config, SOURCE_DIR, DIST_DIR);
aliasingModules(config, ROOT_DIR);
processAngularComponents(config);
setupDevServer(config, PUBLIC_DIR);
skipProcessingVendors(config, ROOT_DIR);
processHtmlDocument(config);

module.exports = config.setup();
