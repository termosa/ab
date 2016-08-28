'use strict';

var angular = require('angular');

var backendlessModule = require('backendless-angular');
var mockConfig = require('./spec/message.mock');

angular.module(backendlessModule)
.config(function(backendlessProvider) {
  angular.forEach(mockConfig(), function(mock) {
    backendlessProvider.when(mock);
  });
});

var id = 'landingPage';
angular.module(id, [
  backendlessModule,
  require('user-activity')
]);

module.exports = id;
