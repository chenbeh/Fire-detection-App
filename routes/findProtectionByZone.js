var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var zone = require('../models/zoneSchema.js');
var protection_civile = require('../models/protectionCivileSchema.js');

router.get('/:zone', function(req, res, next) {
    zone.find({ name : req.params.zone }, function(err, zon){
        if (err) return next(err);
        if(zon[0]) {
        protection_civile.find({ _id : zon[0].protection_id},function(err,prot){
            if (err) return next(err);
            console.log(prot);
            res.json(prot);
        });}
        else res.json([]);
    });
});

module.exports = router;