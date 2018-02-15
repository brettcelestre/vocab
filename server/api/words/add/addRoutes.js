
const addController = require('./addController');

module.exports = function(app) {

  app.route('/add/:word')
    .post(addController.add);

  // app.route('/add/batch')
  // .post();

};