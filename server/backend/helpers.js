'use strict';

const oxford = require('./oxford').api;

const helpers = {};

helpers.getWord = (word) => {
  return oxford.api.getDefinition(word);
};

module.exports = helpers;