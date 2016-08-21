var path = require('path');
var webpack = require('webpack');
var config = require('webpack-manager')();
var ioConfiguration = require('./io-configuration');
var aliasingModules = require('./aliasing-modules');
var processAngularComponents = require('./process-angular-components');
var setupDevServer = require('./setup-dev-server');
var skipProcessingVendors = require('./skip-processing-vendors');
var processHtmlDocuments = require('./process-html-documents');
var processStyles = require('./process-styles');
var processImages = require('./process-images');

var ROOT_DIR = path.resolve('./');
var PUBLIC_DIR = ROOT_DIR;
var SOURCE_DIR = path.resolve('./src');
var DIST_DIR = path.resolve('./dist');

ioConfiguration(config, SOURCE_DIR, DIST_DIR);
aliasingModules(config, ROOT_DIR);
processAngularComponents(config);
setupDevServer(config, PUBLIC_DIR);
skipProcessingVendors(config, ROOT_DIR);
processHtmlDocuments(config);
processStyles(config);
processImages(config);

module.exports = config.setup();
