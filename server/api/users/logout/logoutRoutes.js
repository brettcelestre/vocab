
const logoutController = require('./logoutController');

module.exports = function(app) {

  app.route('/')
    .get(logoutController.logout)

};