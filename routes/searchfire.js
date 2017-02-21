var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var zone = require('../models/zoneSchema.js');
var incendie = require ('../models/incendieSchema.js');



router.get('/:zone/:date?',function(req, res) {

    zone.find({ name: req.params.zone }, function(err, ta) {

        id_zone = ta;
        console.log(ta[0]._id);

        var date= req.params.date;
        if (!date){
            incendie.find({zone_id: ta[0]._id}, function (err, fires) {
                if (err) {
                    res.send(err);
                }
                console.log(fires);
                res.json(fires);

            });
        }
        else {
            incendie.find({zone_id: ta[0]._id, date: date}, function (err, fires) {
                if (err) {
                    res.send(err);
                }
                console.log(fires);
                res.json(fires);

            });
        }

    });


    /** **/
});

module.exports = router;