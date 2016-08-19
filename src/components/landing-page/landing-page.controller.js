var angular = require('angular');
var landingPageModule = require('./landing-page.module');

var id = 'LandingPageController';
angular.module(landingPageModule)
.controller(id, function() {
  this.name = 'World';
});

exports.id = id;
exports.module = landingPageModule;
