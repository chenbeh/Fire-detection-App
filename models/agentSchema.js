var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
var userSchema = new Schema({
    _id: ObjectId,
    name: String,
    username: String,
    password:String


});

// the schema is useless so far
// we need to create a model using it
var test = mongoose.model('agent', userSchema);

// make this available to our users in our Node applications
module.exports = test;