var express = require('express');
var router = express.Router();
var User = require('../app/user/user-model');

let register = function(req, res, next) {
  var user = new User({
    'email': req.body.email,
    'password': req.body.password
  });
  
  var result = User.createUser(user).then(function(response){
    let test = '';
    res.json(response);
  }).catch(function(error){
    let test = '';
    res.status(error.code).json(error);
  });
};

let login = function(req, res, next) {
  var user = new User({
    'email': req.body.email,
    'password': req.body.password
  });
  
  var result = User.login(user).then(function(response){
    res.json(response);
  }).catch(function(error){
    res.status(error.code).json(error);
  });
};

/* GET home page. */
router.post('/register', register);
router.post('/login', login);

module.exports = router;
