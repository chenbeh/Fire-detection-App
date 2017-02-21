var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
var userSchema = new Schema({
    _id : ObjectId,
    name : String,
    adresse : String
});

// the schema is useless so far
// we need to create a model using it
var protection_civile = mongoose.model('protection_civile', userSchema);

module.exports = protection_civile;
