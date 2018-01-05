
const signUpController = require('./signUpController');

module.exports = function(app) {

  app.route('/')
    .post(signUpController.signUp)

};