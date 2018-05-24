'use strict';

// Oxford API
const oxford = require('../oxford');

// Models
const User = require('app/server/api/users/signUp/signUpModel');
const Word = require('./wordModel');

const getWord = (word) => {
  console.log('============================');
  console.log('Backend > DB > API > getWord = ', word);

  return Word.findOne({word: word})
    .exec(function(err, word) {
      // If doesn't doesn't exist
      if (!word) {
        console.log(' >>> word does not exist in our db');
        return false;
      // This word already exists
      } else {
        console.log('Word already exists, Got the word = ', word);
        return word;
      }
    });
};

const saveWord = (definition) => {
  console.log('============================');
  console.log('Backend > DB > API > saveWord');
  var newWord = new Word(definition);
  newWord.save(function(err, word) {
    if (err) {
      console.log('========== err = ', err);
      return console.error(err);
    } else {
      console.log('Word Saved successfully = ', definition.word);
    }
  });
}

const addWordToUser = (word) => {
  console.log('============================');
  console.log('Backend > db > addWordToUser = req.session.username = ', req.session.username);
  // UserModel.findOne({word})
  //   .exec(function(err, word) {
  //     // If doesn't doesn't exist
  //     if (!word) {
  //       return false;
  //     // This word already exists
  //     } else {
  //       console.log('Got the word = ', word);
  //       return word;
  //     }
  //   });
};

module.exports = {
  getWord,
  saveWord,
  addWordToUser
}