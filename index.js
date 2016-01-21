/*!
 * get-vinyl-file <https://github.com/jonschlinkert/get-vinyl-file>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isMatch = require('match-file');
var path = require('path');

module.exports = function getFile(name, collection, fn) {
  var file = collection[name];
  if (file) return file;

  if (typeof fn === 'function') {
    file = collection[fn(name)];
    if (file) return file;
  }

  for (var key in collection) {
    file = collection[key];
    if (isMatch(name, file)) {
      return file;
    }
  }
};
