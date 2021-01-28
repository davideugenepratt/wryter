var mongoose = require('mongoose');
let schema = process.env.MONGO_SCHEMA ? process.env.MONGO_SCHEMA : 'mongodb://';
let hostname = process.env.MONGO_HOST ? process.env.MONGO_HOST : 'localhost';
let port = process.env.MONGO_PORT ? process.env.MONGO_PORT : '27017';
let database = process.env.MONGO_DATABASE ? process.env.MONGO_DATABASE : 'wryter';
let authString = process.env.MONGO_USERNAME && process.env.MONGO_PASSWORD ? process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@' : '';

mongoose.connection.on('error', function(err) {
    console.error('MongoDB error: %s', err);
});

mongoose.connect(schema + authString + hostname + ':' + port + '/' + database , function(){});

module.exports = mongoose;