'use strict';

// Stubs
// const loginStubs = require('./loginStubs');

const oxford = require('app/server/backend/oxford');

module.exports = {

  /* */
  get: function(req, res) {
    // Checks for stub
    if ( req.headers['x-stub'] ) {
      // res.status(200).send(loginStubs.post(req.headers['x-stub']));
    }

    const { word } = req.params;
 
      // Check if word already exists our db
        // If it does, throw error
        // If not, proceed
    // check if we already have word saved in our DB
      // If not, retrieve word
        oxford.api.getDefinition(word)
          .then((data) => {
            console.log('WORDS - getController = ', data);
            res.status(200).send(data);
          })
      // If we already have word, proceed
        // res.status(201).send();
    
    // then
      // grab req.session.user.id  
      // Check if word already exists in users list
        // If not, add word to users list

    
  }
};