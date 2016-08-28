'use strict';

var angular = require('angular');

var id = 'app.settings';
angular.module(id, [
  require('./settings/session')
]);

module.exports = id;
