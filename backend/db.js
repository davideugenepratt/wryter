var mongoose = require('mongoose');
//  mongoose.connect('mongodb://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_HOST + '@' + process.env.MONGO_PASSWORD + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DATABASE , function(){});
mongoose.connect('mongodb://127.0.0.1:27017/Wryter');
module.exports = mongoose;