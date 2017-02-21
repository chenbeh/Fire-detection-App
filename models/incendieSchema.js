var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
var userSchema = new Schema({
    _id : ObjectId,
    degree : String,
    capteur_id: ObjectId,
    zone_id: ObjectId,
    date : Date

});

// the schema is useless so far
// we need to create a model using it
var incendie = mongoose.model('incendie', userSchema);

module.exports = incendie;
