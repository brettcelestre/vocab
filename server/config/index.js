
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressJoi = require('express-joi-validator');

const authCheck = require('app/server/util/authCheck');
const signUpModel = require('app/server/api/users/signUp/signUpValidation');

module.exports = function (app, express) {
  
  const home = express.Router();
  const healthCheck = express.Router();
  const signUpRoutes = express.Router();
  const loginRoutes = express.Router();
  const logoutRoutes = express.Router();
  const forgotPasswordRoutes = express.Router();
  const addRoutes = express.Router();
  const getRoutes = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  // app.use(express.static(__dirname + '/../../client'));

  app.use('/health-check', healthCheck);
  require('../api/users/healthCheck/healthCheckRoutes')(healthCheck);

  app.use('/signup', expressJoi(signUpModel), signUpRoutes);
  // app.use('/signup', signUpRoutes);
  require('../api/users/signUp/signUpRoutes')(signUpRoutes);

  app.use('/login', loginRoutes);
  require('../api/users/login/loginRoutes')(loginRoutes);

  app.use('/logout', authCheck, logoutRoutes);
  require('../api/users/logout/logoutRoutes')(logoutRoutes);

  app.use('/forgot-password', forgotPasswordRoutes);
  require('../api/users/forgotPassword/forgotPasswordRoutes')(forgotPasswordRoutes);

  // app.use('/words', getRoutes);
  // require('../api/words/get/getRoutes')(getRoutes);

  app.use('/words', authCheck, addRoutes);
  require('../api/words/add/addRoutes')(addRoutes);

  // General Error Handler
  app.use(function (err, req, res, next) {
    if (err.isBoom) {
      return res.status(err.output.statusCode).json(err.output.payload);
    }
  });
};