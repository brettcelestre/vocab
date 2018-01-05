

module.exports = {
  
    get: function(req, res) {
      console.log('Health Check Get call ran');
      res.status(200).send();
    }
  };