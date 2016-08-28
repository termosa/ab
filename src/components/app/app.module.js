'use strict';

var angular = require('angular');

var id = 'app';
var instance = angular.module(id, [
  'ng',
  require('angular-route'),
  require('./app.settings'),
  require('./app.pages')
]);

instance.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.caseInsensitiveMatch = true;
});

instance.run(function($rootScope, $log) {
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
    $log.error('[$routeChangeError] Rejection:', rejection);
    $log.error('[$routeChangeError] Details:', {
      event: event,
      current: current,
      previous: previous
    });
  });
});

instance.run(function($log) {
  if (IS_DEV) { $log.log('App is running'); }
});

module.exports = id;
