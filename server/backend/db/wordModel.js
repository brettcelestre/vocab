
const mongoose = require('mongoose'),
      Q = require('q'),
      Schema = mongoose.Schema;

const NoteSchema = new Schema({
  text: {type: String, required: false},
  type: {type: String, required: false}
})

const SenseSchema = new Schema({ 
  definitions: [{ type: String, required: false }],
  examples: [{ type: String, required: false }],
  notes: [NoteSchema]
});

const SensesSchema = new Schema({ 
  etymologies: [{ type: String, required: false }],
  senses: [SenseSchema]
});

const EntrySchema = new Schema({ 
  partOfSpeech: {
    type: String,
    required: true,
    lowercase: true
  },
  language: {
    type: String,
    required: true,
    lowercase: true
  },
  mp3: {
    type: String,
    required: true,
    lowercase: true
  },
  entries: [SensesSchema]
});

const WordSchema = new Schema({
  word: {
    type: String,
    required: true,
    unique: true
  },
  entries: [EntrySchema],
  createdAt: {
    type: Date,
    default: new Date()
  } 
});

module.exports = mongoose.model('Word', WordSchema);



// {
//   "word": "protection",
//   "entries": [
//       {
//           "partOfSpeech": "Noun",
//           "language": "en",
//           "mp3": "http://audio.oxforddictionaries.com/en/mp3/protection_gb_1.mp3",
//           "entries": [
//               {
//                   "etymologies": [
//                       "Middle English: from Old French, from late Latin protectio(n-), from protegere ‘cover in front’ (see protect)"
//                   ],
//                   "senses": [
//                       {
//                           "definitions": [
//                               "the action of protecting, or the state of being protected"
//                           ],
//                           "examples": [
//                               "the B vitamins give protection against infection",
//                               "his son was put under police protection"
//                           ],
//                           "notes": []
//                       }
//                   ]
//               }
//           ]
//       }
//   ]
// }