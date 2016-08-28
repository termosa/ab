'use strict';

var angular = require('angular');

var id = 'app.settings.session';
var instance = angular.module(id, [
  require('ts-session')
]);

var storageServiceId = 'appSessionStorage';
instance.factory(storageServiceId, function($window) {
  'ngInject';

  var sessionKey = 'session';
  var localStorage = $window.localStorage;

  return {
    save: function(data) {
      localStorage.setItem(sessionKey, JSON.stringify(data));
    },
    load: function() {
      return JSON.parse(localStorage.getItem(sessionKey));
    },
    drop: function() {
      localStorage.removeItem(sessionKey);
    }
  };
})
.config(function(tsSessionProvider) {
  tsSessionProvider.setStorage(storageServiceId);
});

module.exports = id;
