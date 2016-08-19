var angular = require('angular');
var appModule = require('component/app');
var document = require('module/document');

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.id]);
});
