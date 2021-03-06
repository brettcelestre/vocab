'use strict';

// Stubs
// const loginStubs = require('./loginStubs');

const helpers = require('app/server/backend/helpers');

module.exports = {

  add: function(req, res) {
    // Checks for stub
    if ( req.headers['x-stub'] ) {
      res.status(200).send(loginStubs.post(req.headers['x-stub']));
    }

    console.log('ADDING A WORD TO A USER ======================');
    
    const { word } = req.params;
    console.log(' >>> word === ', word);
    console.log(' >>> req.session.user.username = ', req.session.user.username);
    
    // Check if word already exists in users list
    User.findOne({username: req.session.user.username})
      // If it does exist, throw error
      // If not, add word to users list
      .exec(function(err, user) {
        
      });
      
        // If not, proceed
    // check if we already have word saved in our DB
      // If not, retrieve word

        // helpers.getWord(word)
        //   .then((data) => {
        //     console.log('WORDS - addController = ', data);
            // res.status(200).send(data);
        //   })
      
          // if word is not found, throw error
        // parse info
        // Save in DB
      // If we already have word, proceed
        // res.status(201).send();
    
    // then
      // grab req.session.user.id  
      // Check if word already exists in users list

    // res.status(200).send(word);
  }
};