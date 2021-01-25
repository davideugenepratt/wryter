var mongoose = require('../../db');
var Schema = mongoose.Schema;

const statsSchema = new Schema({
  userId: { type: String, required: true, index: true },
  writingCount: { type: Number },
  wordCount: { type: Number },
  writingStreakInDays: { type: Number },
});

var Stats = (module.exports = mongoose.model('Stats', statsSchema));

// on create user (to set stats to 0);
// on create new writing
// on update old writing.(recount words only)

// get all writings from writing model
// count number of writings,
// count number of words,
// count days in a row,

// push object to stats database with user id.

// routes to create stats(initialize to 0), update stats
