var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var test = require('../models/test.js');
require('../routes/index.js');
//var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

/* GET users listing. */
router.get('/', function(req, res, next) {

  test.find(function(err, users) {
    if (err) throw err;
    res.json(users);
    // object of all the users

    console.log(a);

  });
});

router.post('/',function(req,res,next) {

  test.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);

  });

});

router.post('/authenticate',function(req,res,next) {

    // find the user
    test.findOne({
      name: req.body.name
    }, function(err, user) {

      if (err) throw err;
console.log(user);

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {

        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

          // if user is found and password is right
          // create a token
        /**  var token = jwt.sign(user, app.get('superSecret'), {
            expiresInMinutes: 1440 // expires in 24 hours
          });*/

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
           // token: token
          });
        }
      }}

);
});





module.exports = router;
