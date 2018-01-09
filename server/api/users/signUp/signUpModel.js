
const mongoose = require('mongoose'),
    Q = require('q'),
    bcrypt = require('bcrypt-nodejs'),
    SALT_WORK_FACTOR = 10,
    Schema = mongoose.Schema;

const WordSchema = new Schema({ 
  word: {
    type: String,
    required: true,
    lowercase: true
  },
  viewCount: Number,
});

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  salt: String,
  words: [WordSchema],
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  } 
});

// use for login to check password
UserSchema.methods.comparePasswords = function (plainPassword) {
  var defer = Q.defer();
  var savedPassword = this.password;
  bcrypt.compare(plainPassword, savedPassword, function (err, isMatch) {
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(isMatch);
    }
  });
  return defer.promise;
};
  
// on signup generate salt and hash plaintext password 
UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      // override the plaintext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});
  
  module.exports = mongoose.model('User', UserSchema);