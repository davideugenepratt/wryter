var mongoose = require('mongoose');
console.log('test453434');
let hostname = process.env.MONGO_HOST ? process.env.MONGO_HOST : 'localhost';
let port = process.env.MONGO_PORT ? process.env.MONGO_PORT : '27017';
let database = process.env.MONGO_DATABASE ? process.env.MONGO_DATABASE : 'wryter';
let authString = process.env.MONGO_USERNAME && process.env.MONGO_PASSWORD ? process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@' : '';
console.log('test453434');

mongoose.connection.on('error', function(err) {
    console.error('MongoDB error: %s', err);
});
console.log('test453434');

mongoose.connect('mongodb://' + authString + hostname + ':' + port + '/' + database , function(){});
console.log('test453434');

module.exports = mongoose;