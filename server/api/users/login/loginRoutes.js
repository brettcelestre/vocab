
const loginController = require('./loginController');

module.exports = function(app) {

  app.route('/')
    .post(loginController.login)

};