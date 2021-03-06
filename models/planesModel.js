var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var planesSchema = new Schema({
    domain: String,
    leadCount: Number,
    ownerId: Number,
    plan: String,
    labels: [String] 
});

var Planes = mongoose.model('Planes', planesSchema);

module.exports = Planes;