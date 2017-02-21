var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name : String
});

// the schema is useless so far
// we need to create a model using it
var all_id_protection = mongoose.model('all_id_protection', userSchema);

// make this available to our users in our Node applications
module.exports = all_id_protection ;