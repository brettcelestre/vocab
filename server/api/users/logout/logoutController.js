'use strict';

// Stubs
const logoutStubs = require('./logoutStubs');

module.exports = {

  logout: function(req, res) {
    // Checks for stub
    if ( req.headers['x-stub'] ) {
      res.status(200).send(logoutStubs.post(req.headers['x-stub']));
    }

    console.log('logoutController logout() - req.body.username: ', req.body.username);
    
    // End session
    res.status(200).send({});
  }
};