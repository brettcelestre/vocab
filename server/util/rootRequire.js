'use strict';

/**
 * Should be required once at the beginning of an app. Enables required from the root of the repository
 * by doing require('app/...')
 */

const path = require('path');
const Module = require('module');

const origRequire = Module.prototype.require;

Module.prototype.require = function require(filepath) {
  if (filepath.indexOf('app/') === 0) {
    filepath = path.join(process.cwd(), filepath.slice(4)); // eslint-disable-line no-param-reassign
  }

  return origRequire.call(this, filepath);
};
