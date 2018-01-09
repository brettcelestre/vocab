'use strict';

const Joi = require('joi');

const signUp = {
  body: {
    username: Joi.string().example('username11').required(),
    password: Joi.string().example('Password1').required(),
    email: Joi.string().email().example('username11@hotmail.com').required(),
    mobile: Joi.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Mobile Phone Number').example('555-555-5555').required()
  }
};

module.exports = signUp;
