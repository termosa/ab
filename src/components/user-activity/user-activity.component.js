'use strict';

var angular = require('angular');
var userActivityModule = require('./user-activity.module');

var id = 'userActivity';
angular.module(userActivityModule)
.component(id, {
  templateUrl: require('./user-activity.template'),
  controller: function(userSession) {
    'ngInject';
    var ctrl = this;
    ctrl.created = userSession.get('sessionCreated');
    ctrl.visited = userSession.get('lastVisited');
  }
});

module.exports = {
  id: id,
  module: userActivityModule
};
