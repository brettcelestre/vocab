
/* Checks if a user is logged in */
module.exports = function checkAuth(req, res, next) {
  console.log("authCheck Ran");
  if (!req.session.user) {
    console.log('>>> authCheck = ', req.session.user);
    res.send('You must be logged in.');
  } else {
    console.log(' >>> next rann');
    next();
  }
}