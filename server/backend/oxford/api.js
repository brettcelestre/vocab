'use strict';

const config = require('app/server/config/base');
const request = require('request-promise-native');
const { host, app_id, app_key } = config.oxford;

/*
   ==============================
          Request Config
   ==============================
*/

// Sets default headers object with Oxford credentials
const defaultHeader = {
  app_id,
  app_key,
};

/*
   ==============================
         Oxford API Calls
   ==============================
*/

/**
 * Oxford - Get Definition
 * @param  {String} word The word you want information for
 * @return {object} Returns the definition object
 */

const getDefinition = (word) => {
  const uri = `${host}/${word}`;
  
  const options = {
    url: uri,
    method: 'GET',
    headers: defaultHeader
  };

  return request(options)
    .then((res) => {
      const data = JSON.parse(res);

      // return convertWord(data);

      // // Builds word entries
      // const dbWordModel = {
      //   word,
      //   entries: []
      // };

      // // Iterates over Oxford response and builds standard word model
      // if(data.results[0].lexicalEntries.length > 0) {
      //   data.results[0].lexicalEntries.forEach((entry) => {
      //     const currentEntry = {};

      //     // Part of Speech
      //     if (entry.lexicalCategory){
      //       currentEntry.partOfSpeech = entry.lexicalCategory;
      //     }

      //     // Language
      //     if (entry.language) {
      //       currentEntry.language = entry.language;
      //     }

      //     // MP3 Audio
      //     if (entry.pronunciations.length) {
      //       currentEntry.mp3 = entry.pronunciations[0].audioFile;
      //     }

      //     // Actual entries
      //     if (entry.entries.length) {
      //       currentEntry.entries = entry.entries.map((data) => {
      //         const result = {
      //           etymologies: data.etymologies ? data.etymologies : [],
      //         }

      //         // Gathers all senses
      //         if ( data.senses.length) {
      //           result.senses = data.senses.map((val) => {
      //             const senseResult = {
      //               definitions: [],
      //               examples: [],
      //               notes: []
      //             };
      //             // Stores definitions
      //             senseResult.definitions = val.definitions;
      //             // Stores examples
      //             if (val.examples && val.examples.length) {
      //               val.examples.forEach((example) => {
      //                 senseResult.examples.push(example.text);
      //               });
      //             }
      //             // Stores notes 
      //             if (val.notes && val.notes.length) {
      //               senseResult.notes = val.notes;
      //             }

      //             return senseResult;
      //           });
      //         }

      //         return result;
      //       });
      //     }

      //     // Pushes 
      //     dbWordModel.entries.push(currentEntry);
      //   });
      // }

      // console.log('Oxford > Get Definition > dbWordModel = ', dbWordModel);

      // // Returns word
      // return dbWordModel;
    })
    .catch((err) => {
      console.log('errrrrro happened', err);
      // throw convertError(err.error);
      throw err;
    });

};

module.exports = { getDefinition };