'use strict';

var angular = require('angular');
var router = require('angular-route');
var pages = require('./app.pages');
var supportComponents = require('angular-route-component-support');

var id = 'app';
var instance = angular.module(id, [
  'ng',
  router
].concat(pages.modules));

supportComponents(instance);

instance.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.caseInsensitiveMatch = true;

  $routeProvider.otherwise({ redirectTo: '/' });

  angular.forEach(pages, function(page) {
    $routeProvider.when(page.path, page.route);
  });
});

instance.run(function($log) {
  if (IS_DEV) { $log.log('App is running'); }
});

module.exports = id;
