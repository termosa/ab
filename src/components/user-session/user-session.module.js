'use strict';

var angular = require('angular');
var tsSessionModule = require('ts-session');

var moduleId = 'userSession';
angular.module(moduleId, [ tsSessionModule ]);

module.exports = moduleId;
