'use strict';

var angular = require('angular');
var landingPageModule = require('./landing-page.module');
var landingPageTemplateUrl = require('./landing-page.template');

var backendlessModule = require('backendless-angular');
var mockConfig = require('./spec/message.mock');

angular.module(backendlessModule)
.config(function(backendlessProvider) {
  angular.forEach(mockConfig(), function(mock) {
    backendlessProvider.when(mock);
  });
});

var id = 'landingPage';
angular.module(landingPageModule, [ backendlessModule ])
.component(id, {
  templateUrl: landingPageTemplateUrl,
  controller: function($http) {
    'ngInject';

    var ctrl = this;
    ctrl.msg = 'Loading...';
    $http.get('/api/message')
      .then(function(res) {
        ctrl.msg = res.data.message;
      });
  }
});

exports.id = id;
exports.module = landingPageModule;
