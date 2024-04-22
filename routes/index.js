var express = require('express');
var router = express.Router();
const daysCtrl = require('../controllers/entries');
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'My Fitness Journal' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/entries',
    failureRedirect: '/'
  }
));
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/movies');
  });
});
module.exports = router;
