var angular = require('angular');
var appModule = require('component/app');

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.id]);
});
