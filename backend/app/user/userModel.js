var mongoose = require('../../db');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, unique: true, required: true, dropDups: true },
  password: { type: String, required: true },
});

var User = (module.exports = mongoose.model('User', userSchema));
var secret = process.env.SECRET || 'wrytersecret';

module.exports.createUser = function (newUser) {
  console.log('creating user');
  var promise = new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
        newUser.password = hash;
        var response = newUser
          .save()
          .then(function (response) {
            resolve({ success: true });
          })
          .catch(function (err) {
            console.log(err);
            reject({
              success: false,
              code: 500,
              error: {
                code: err.code,
                errmsg: err.errmsg,
                keyPattern: err.keyPattern,
                keyValue: err.keyValue,
              },
            });
          });
      });
    });
  });
  //
  return promise;
};

module.exports.login = function (username, password) {
  var promise = new Promise((resolve, reject) => {
    User.findOne({ username: username }).then((user) => {
      if (!user) {
        reject({
          success: false,
          code: 404,
          error: 'No Account Found',
        });
      }
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user._id,
            username: user.username,
          };
          jwt.sign(payload, secret, { expiresIn: 3600 }, (err, token) => {
            if (err) {
              reject({
                success: false,
                code: 500,
                error: 'Error signing token',
                raw: err,
              });
            } else {
              resolve({
                code: 200,
                success: true,
                token: token,
              });
            }
          });
        } else {
          reject({
            success: false,
            code: 401,
            error: 'Password is incorrect',
          });
        }
      });
    });
  });

  return promise;
};
