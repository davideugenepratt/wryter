var mongoose = require('../../db');
var Schema = mongoose.Schema;

var writingSchema = new Schema({
    writing: String,
    author: {type: String, default: ''},
    date: {
        type: Date,
        default: Date.now()
    }
});

var Writing = module.exports = mongoose.model('Writing', writingSchema);


