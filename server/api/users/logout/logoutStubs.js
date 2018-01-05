
// Response Data
// const logoutResponse = require('app/server/data/users/logoutResponse');

module.exports = {
  post: function(stub) {
    const options = ['options', 'success'];
    switch ( stub ) {
      case 'options':
        return options;
      case 'success':
        // return logoutResponse;
      default:
        return 'Unknown stub request';
    }
  }
}