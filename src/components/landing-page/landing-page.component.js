'use strict';

var angular = require('angular');
var landingPageModule = require('./landing-page.module');
var landingPageTemplateUrl = require('./landing-page.template');

var mockBackendModule = require('mock-backend');
var mockConfig = require('./spec/message.mock');

angular.module(mockBackendModule)
.config(function(mockBackendProvider) {
  angular.forEach(mockConfig(), function(mock) {
    mockBackendProvider.when(mock);
  });
});

var id = 'landingPage';
angular.module(landingPageModule, [ mockBackendModule ])
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
