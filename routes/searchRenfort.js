var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
var protection_active = require('../models/id_protectionSchema');

function searchrenfort(){
    protection_active.findOneRandom(function(err, result) {
        if (!err) {
            return result;
        }
    });

}

module.exports = searchrenfort ;