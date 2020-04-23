var mongoose = require('mongoose');
<<<<<<< HEAD
//  mongoose.connect('mongodb://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_HOST + '@' + process.env.MONGO_PASSWORD + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DATABASE , function(){});
mongoose.connect('mongodb://127.0.0.1:27017/Wryter');
=======

let authString = process.env.MONGO_USERNAME && process.env.MONGO_PASSWORD ? process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@' : '';

mongoose.connect('mongodb://' + authString + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DATABASE , function(){
    console.log(authString);
});

>>>>>>> 249c38f8153909c1470d2f5e5e949e75ae1fbdb0
module.exports = mongoose;