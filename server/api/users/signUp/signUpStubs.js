
// Response Data
const signUpResponse = require('app/server/data/users/signUpResponse');

module.exports = {
  post: function(stub) {
    const options = ['options', 'success'];
    switch ( stub ) {
      case 'options':
        return options;
      case 'success':
        return signUpResponse;
      default:
        return 'Unknown stub request';
    }
  }
}