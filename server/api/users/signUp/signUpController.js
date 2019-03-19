'use strict';

// Stubs
const signUpStubs = require('./signUpStubs');

// Models
// const User = require('./signUpModel');

module.exports = {

  signUp: function(req, res) {
    // Checks for stub
    if ( req.headers['x-stub'] ) {
      res.status(200).send(signUpStubs.post(req.headers['x-stub']));
    }

    console.log('Sign Up Route > req.body = ', req.body);
    console.log('Sign Up Route > req.session = ', req.session);

    res.send('true');
    
    // User.findOne({username: req.body.username})
    //   .exec(function(err, user) {
    //     // If user doesn't exist
    //     if (!user) {
    //       var newUser = new User(req.body);
    //       newUser.save(function(err, user) {
    //         if (err) {
    //           console.log('========== err = ', err);
    //           res.send(err);
    //           return console.error(err);
    //         } else {
    //         // If no error, regenerates session
    //           req.session.regenerate(function() {
    //             // Adds this user to current session
    //             req.session.user = user;
    //             console.log('User Created, new session = ', req.session.user);
    //             res.status(201).send({username: user.username});
    //           });
    //         }
    //       });
    //     // This user already exists
    //     } else {
    //       console.log('User Already Exists');
    //       res.status(409).send({message: 'Username already exists.'});
    //     }
    //   });
  }

};