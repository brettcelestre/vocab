
const forgotPasswordController = require('./forgotPasswordController');

module.exports = function(app) {

  app.route('/')
    .post(forgotPasswordController.email)

};