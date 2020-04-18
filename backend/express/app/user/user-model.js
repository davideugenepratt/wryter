var mongoose = require('../../../db');
var bcrypt = require ('bcryptjs');
var schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type:String, unique: true, required: true, dropDups: true},
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser){
    var promise = new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
                newUser.password = hash;
                var response = newUser.save().then(function(response){
                    resolve({'success': true});
                }).catch(function(err){
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