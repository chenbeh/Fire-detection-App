/**
 * Created by portable on 05/11/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
var userSchema = new Schema({

    name: String,
    adresse: String
});

// the schema is useless so far
// we need to create a model using it
var capteur = mongoose.model('protection', userSchema);

// make this available to our users in our Node applications
module.exports = capteur;
