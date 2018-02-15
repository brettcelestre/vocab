
'use strict';

const db = require('./db');
const oxford = require('./oxford');

const getWord = (word) => {
  console.log('Helpers > getWord =', word);

  // Check DB
  return db.api.getWord(word)
    .then((data) => {
      if (data === null) {
        console.log('Helpers - word does not exist');
        // Get word from Oxford API
        oxford.api.getDefinition(word)
          .then((data) => {
            console.log(' >>> got word from oxford = ', data);
            // Then save word in our DB
            db.api.saveWord(data);
            return data;
          });
      } else {
        console.log('Helpers - We already have the word');
        return data;
      }
    })
    .catch((err) => {
      throw err;
    });
};

// helpers.addWord = (word) => {
//   return oxford.api.getDefinition(word);
// };

module.exports = {
  getWord
};