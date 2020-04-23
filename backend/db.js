var mongoose = require('mongoose');

let authString = process.env.MONGO_USERNAME && process.env.MONGO_PASSWORD ? process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@' : '';

mongoose.connect('mongodb://' + authString + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DATABASE , function(){
    console.log(authString);
});

module.exports = mongoose;