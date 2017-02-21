var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
var userSchema = new Schema({
    _id: ObjectId,
    name: String,
    protection_id: String

});

// the schema is useless so far
// we need to create a model using it
var zone = mongoose.model('zone', userSchema);

module.exports = zone;
