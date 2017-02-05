var express = require('express');
var router = express.Router();

var passport = require('passport');
var passport_logic = require('../config/passport')(passport);

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.json({ message: 'welcome to secured api!' });
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.json({message: 'Not Authorized!'});

}


module.exports = router;
