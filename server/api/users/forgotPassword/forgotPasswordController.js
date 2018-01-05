'use strict';

// Stubs
// const signUpStubs = require('./signUpStubs');

module.exports = {

  email: function(req, res) {
    // Checks for stub
    if ( req.headers['x-stub'] ) {
      res.status(200).send(forgotPasswordStubs.post(req.headers['x-stub']));
    }

    console.log('signupController forgotPassword() - req.body.username: ', req.body.username);
    console.log('signupController forgotPassword() - req.body.email: ', req.body.email);
    
    // Checks if user email exists
      // if
        // create hash token and store in users account
        // send recovery email
      // else
        res.status(400).send('Email not found');
  }
};