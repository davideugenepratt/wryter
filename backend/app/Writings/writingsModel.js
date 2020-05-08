const mongoose = require('../../db')
const Schema = mongoose.Schema

const writingSchema = new Schema({
    writing: {type: String, required:true}
    // TODO add the following properties to the schema to track metrics
    // image 
    // timer length
    // word goal length
});

const Writing = mongoose.model('Writing', writingSchema);
module.exports = Writing;

