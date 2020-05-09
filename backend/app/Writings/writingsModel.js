var mongoose = require('../../db');
var Schema = mongoose.Schema;

var writingSchema = new Schema({
    writing: String
});

var Writing = module.exports = mongoose.model('Writing', writingSchema);


