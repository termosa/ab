'use strict';

var angular = require('angular');
var landingPageModule = require('./landing-page.module');
var landingPageTemplateUrl = require('./landing-page.template');

var id = 'landingPage';
angular.module(landingPageModule)
.component(id, {
  templateUrl: landingPageTemplateUrl,
  controller: function() {
    this.name = 'World';
  }
});

exports.id = id;
exports.module = landingPageModule;
