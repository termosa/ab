'use strict';

var angular = require('angular');
var angularMockBackend = require('angular-mock-backend');

var mocks = [];
var delayIndex = 1;
var responseIndex = 2;

var id = 'mockBackend';
angular.module(id, [ angularMockBackend ])
.constant('vinkaga.mockBackend.mock', mocks)
.provider('mockBackend', function() {
  function when(method, url, data, headers, keys) {
    var mock;

    if (typeof method === 'object') {
      mock = [ method.request, method.delay, method.response ];
    } else {
      mock = [[ method, url, data, headers, keys ], null, null ];
    }

    var chain = {
      respond: function(status, data, headers, statusText) {
        mock[responseIndex] = {
          status: status,
          data: data,
          headers: headers,
          statusText: statusText
        };
        return chain;
      },
      delay: function(time) {
        mock[delayIndex] = time;
        return chain;
      }
    };

    mocks.push(mock);
    return chain;
  }

  when.when = when;

  return {
    when: when,
    $get: function() {
      return null;
    }
  };
});

module.exports = id;
