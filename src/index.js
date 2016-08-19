var angular = require('angular');
var appModule = require('./modules/app');

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.id]);
});
