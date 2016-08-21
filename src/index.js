require('./index.css');
var angular = require('angular');
var appModule = require('app');
var document = require('document');

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule], { strictDi: true });
});
