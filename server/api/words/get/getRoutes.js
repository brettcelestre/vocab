
const getController = require('./getController');

module.exports = function(app) {

  app.route('/get/:word')
    .get(getController.get);

};