
const healthCheckController = require('./healthCheckController');

module.exports = function(app) {

  app.route('/')
    .get(healthCheckController.get)

};