'use strict';

const wordConvert = {};

http://performance.morningstar.com/fund/performance-return.action?t=APPL&region=usa&culture=en-US

wordConvert.buildModel = (data) => {
  // Builds word entries
  const dbWordModel = {
    word,
    entries: []
  };

  // Iterates over Oxford response and builds standard word model
  if(data.results[0].lexicalEntries.length > 0) {
    data.results[0].lexicalEntries.forEach((entry) => {
      const currentEntry = {};

      // Part of Speech
      if (entry.lexicalCategory){
        currentEntry.partOfSpeech = entry.lexicalCategory;
      }

      // Language
      if (entry.language) {
        currentEntry.language = entry.language;
      }

      // MP3 Audio
      if (entry.pronunciations.length) {
        currentEntry.mp3 = entry.pronunciations[0].audioFile;
      }

      // Actual entries
      if (entry.entries.length) {
        currentEntry.entries = entry.entries.map((data) => {
          const result = {
            etymologies: data.etymologies ? data.etymologies : [],
          }

          // Gathers all senses
          if ( data.senses.length) {
            result.senses = data.senses.map((val) => {
              const senseResult = {
                definitions: [],
                examples: [],
                notes: []
              };
              // Stores definitions
              senseResult.definitions = val.definitions;
              // Stores examples
              if (val.examples && val.examples.length) {
                val.examples.forEach((example) => {
                  senseResult.examples.push(example.text);
                });
              }
              // Stores notes 
              if (val.notes && val.notes.length) {
                senseResult.notes = val.notes;
              }

              return senseResult;
            });
          }

          return result;
        });
      }

      // Pushes 
      dbWordModel.entries.push(currentEntry);
    });
  }
  console.log('Oxford > Convert > build word model = ', dbWordModel);

  // Returns word
  return dbWordModel;
};

module.exports = wordConvert;
