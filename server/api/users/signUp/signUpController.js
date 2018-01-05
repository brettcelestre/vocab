'use strict';

// Stubs
const signUpStubs = require('./signUpStubs');

module.exports = {

  signUp: function(req, res) {
    // Checks for stub
    if ( req.headers['x-stub'] ) {
      res.status(200).send(signUpStubs.post(req.headers['x-stub']));
    }

    console.log('signupController signup() - req.body.username: ', req.body.username);
    
    // Checks if username is already signed up 
      // if already signed up, send message
      // if not signed up, create account

    // req.session.regenerate(function() {
    //     req.session.user = req.body.user;

    //     res.status(200).send({user: req.body.user});
    //   });
    
    // console.log('req.session ===', req.session);

    res.status(200).send({username: req.body.username});
  }
};