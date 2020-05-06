var express = require('express');
var router = express.Router();
var User = require('../user/userModel');
var passport = require('passport');
var jwt = require('jsonwebtoken');

let register = function(req, res, next) {
  res.json({success: true});
  if (!validatePassword(req.body.password)){
    console.error('invalid password');
    return;
  }

  var user = new User({
    'username': req.body.username,
    'password': req.body.password
  });
  
  var result = User.createUser(user).then(function(response){
    console.log(response);
    res.json(response);
  }).catch(function(error){
    res.status(error.code).json(error);
  });
};

let login = function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password; 
  
  var result = User.login(username, password).then(function(response){
    res.json(response);
  }).catch(function(error) {
    res.status(error.code).json(error);
  });
  
}

//password validation function. Maybe place in a helper function eventually
const validatePassword = (password) => {
  // password requires 1 lowercase, 1 uppercase, 1 digit and 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}/;
  return passwordRegex.test(password);
}

/* GET home page. */
router.post('/register', register);
router.post('/login', login);

module.exports = router;
