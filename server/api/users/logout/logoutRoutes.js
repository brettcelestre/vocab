
const logoutController = require('./logoutController');

module.exports = function(app) {

  app.route('/')
    .post(logoutController.logout)

};