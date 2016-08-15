'use strict';

var dep = require('./dep');

module.exports = function(name) {
  return dep.hi() + ', ' + name;
};
