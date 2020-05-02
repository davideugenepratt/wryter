var mongoose = require('../../db');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type: String, unique: true, required: true, dropDups: true},
    password: {type: String, required: true},

});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser){
    var promise = new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
                newUser.password = hash;
                var response = newUser.save().then(function(response){
                    resolve({'success': true});
                }).catch(function(err){
                    console.log(err);
                    reject({
                        'success':false,
                        'code': 500,
                        'error':{
                            'code': err.code,
                            'errmsg': err.errmsg,
                            'keyPattern': err.keyPattern,
                            'keyValue': err.keyValue
                        }
                    });
                });
            });
         });
    });
    return promise;
}