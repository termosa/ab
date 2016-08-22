'use strict';

var angular = require('angular');
var appModule = require('app');
var document = require('document');

require('./index.css');

angular.element(document).ready(function() {
  angular.bootstrap(document, [ appModule ], { strictDi: true });
});
