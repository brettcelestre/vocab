'use strict';

// Stubs
const loginStubs = require('./loginStubs');

// Models
const User = require('../signUp/signUpModel');

module.exports = {

  login: function(req, res) {
    // Checks for stub
    if ( req.headers['x-stub'] ) {
      res.status(200).send(loginStubs.post(req.headers['x-stub']));
    }

    const username = req.body.username,
          plainPassword = req.body.password;

    // Searches database for this user
    User.findOne({username: username})
      .exec(function(err, user) {
          if (!user) {
            res.status(404).send({error: 'User not found'});
          } else {
            // Checks if password matches encrypted password in database
            return user.comparePasswords(plainPassword)
            .then(function(foundUser) {
              if (!foundUser) {
                res.status(404).send({error: 'password does not match'});
              } else {
                // Regenerates new session
                req.session.regenerate(function() {
                  // Sets session to this user
                  req.session.user = user;
                  console.log('req.session = ', req.session);
                  // Sends back only username and symbol
                  res.send({
                    username: user.username,
                    words: user.words,
                    createdAt: user.createdAt
                  });
                });
              }
            });
          }
      });
  }

};