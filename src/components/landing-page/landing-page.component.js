var angular = require('angular');
var landingPageModule = require('./landing-page.module');

var id = 'landingPage';
angular.module(landingPageModule)
.component(id, {
  templateUrl: require('./landing-page.html').id,
  controller: function() {
    this.name = 'World';
  }
});

exports.id = id;
exports.module = landingPageModule;
