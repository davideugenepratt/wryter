var mongoose = require('../../db');
var Schema = mongoose.Schema;

var writingSchema = new Schema({
  text: String,
  title: String,
  slug: String,
  author: { type: String, required: true, index: true },
  unsplashResponse: Object,
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
    default: Date.now(),
  },
});

var Writing = (module.exports = mongoose.model('Writing', writingSchema));
