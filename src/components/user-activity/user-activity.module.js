'use strict';

var angular = require('angular');
var userSessionModule = require('user-session');

var moduleId = 'userActivity';
angular.module(moduleId, [ userSessionModule ]);

module.exports = moduleId;
