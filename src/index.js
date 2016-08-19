var angular = require('angular');
var appModule = require('module/app');

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.id]);
});
