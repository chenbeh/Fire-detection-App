var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var test = require('../models/agentSchema.js');



router.post('/authenticate',function(req,res,next) {

    // find the user
    test.findOne({username: req.body.username}, function(err, user) {

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
                      /*var token = jwt.sign(user, app.get('superSecret'), {
                          expiresInMinutes: 1440 // expires in 24 hours
                          });*/
                    // return the information including token as JSON
                    res.json({success: true,message: 'Enjoy your token!',/*token: token*/});
                }
            }}

    );
});

module.exports = router;