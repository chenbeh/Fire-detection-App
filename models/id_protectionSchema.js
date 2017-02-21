var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name : String,
    priority : String
});
userSchema.plugin(random);
// the schema is useless so far
// we need to create a model using it
var id_protection = mongoose.model('id_protection', userSchema);

// make this available to our users in our Node applications
module.exports = id_protection ;
