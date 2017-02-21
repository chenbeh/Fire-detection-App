var express = require('express');
var mongoose = require('mongoose');
var test = require('../models/test.js');

look= function () {


        test.find(function (err, users) {
        if (err) throw err;
      y = users;
        //res.json(users);
        // object of all the users

console.log(y);
            return y;

    });
    return users;
}
