'use strict';

var mocks = [
  {
    request: [ 'GET', '/api/message' ],
    delay: 500,
    response: { data: { message: 'Hello, Rock!' }}
  }
];

module.exports = function() {
  return mocks;
};
