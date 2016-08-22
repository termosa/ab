'use strict';

var angular = require('angular');

module.exports = function supportComponentByAngularRoute(angularModule) {
  angularModule.config([
    '$routeProvider',
    function($routeProvider) {
      var when = $routeProvider.when;

      $routeProvider.when = function(path, route) {
        if (!route || !route.hasOwnProperty('component')) {
          return when.call(this, path, route);
        }

        var newRoute = angular.copy(route);

        var dirName = (function convertToDirName(componentName) {
          return componentName.replace(/([A-Z])/g, '-$1').toLowerCase();
        })(route.component);
        newRoute.template = '<' + dirName + '></' + dirName + '>';
        newRoute.controller = null;

        return when.call(this, path, newRoute);
      };
    }
  ]);
};
