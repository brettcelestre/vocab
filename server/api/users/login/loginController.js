'use strict';

// Stubs
const loginStubs = require('./loginStubs');

module.exports = {

  login: function(req, res) {
    // Checks for stub
    if ( req.headers['x-stub'] ) {
      res.status(200).send(loginStubs.post(req.headers['x-stub']));
    }

    console.log('loginController login() - req.body.username: ', req.body.username);
    console.log('loginController login() - req.body.password: ', req.body.password);
    req.session.user = req.body.username;
    console.log('req.session = ', req.session);
    
    // Check users password
      // if password is correct, start a new session
        res.status(200).send({username: req.body.username});
      // if incorrect, throw error
    
  }
};