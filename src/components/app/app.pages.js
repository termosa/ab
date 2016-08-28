'use strict';

var angular = require('angular');
var landingPage = require('landing-page');
var supportComponents = require('angular-route-component-support');

var id = 'app.pages';
var instance = angular.module(id, [
  require('angular-route'),
  landingPage.module
]);

supportComponents(instance);

instance.config(function($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/' });

  $routeProvider
    .when('/', landingPage)
  ;
});

module.exports = id;
