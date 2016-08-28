'use strict';

var angular = require('angular');
var userSessionModule = require('./user-session.module');

var id = 'userSession';
angular.module(userSessionModule)
.factory(id, function($window, tsSession) {
  'ngInject';

  var session;

  if (tsSession.has('user')) {
    session = tsSession.get('user');
  } else {
    session = tsSession.create('user', {
      sessionCreated: $window.Date.now()
    });
  }

  session.set('lastVisited', $window.Date.now());

  return session;
});

module.exports = {
  id: id,
  module: userSessionModule
};
