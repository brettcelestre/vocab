'use strict';

const Joi = require('joi');

const signUp = {
  body: {
    username: Joi.string()
      .example('username11')
      .required(),
    password: Joi.string()
      .example('Password1')
      .required(),
    email: Joi.string()
      .email()
      .description('Optional email, used for sending reset password, without it you\'ll never be able to reset your password')
      .example('username11@hotmail.com'),
    mobile: Joi.string()
      .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Mobile Phone Number')
      .description('Optional mobile number, used for sending the word of the day')
      .example('555-555-5555')
  }
};

module.exports = signUp;
