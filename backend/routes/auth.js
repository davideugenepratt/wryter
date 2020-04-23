var express = require('express');
var router = express.Router();
var User = require('../app/user/user-model');

<<<<<<< HEAD
router.post('/register', function(req, res, next) {
  console.log(req.body);

  if (!validatePassword(req.body.password)){
    return;
  }
=======
let register = function(req, res, next) {
>>>>>>> 249c38f8153909c1470d2f5e5e949e75ae1fbdb0
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

<<<<<<< HEAD
//password validation function ** maybe place in helper file 
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}/;
      return passwordRegex.test(password);
}
=======
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
>>>>>>> 249c38f8153909c1470d2f5e5e949e75ae1fbdb0

/* GET home page. */
router.post('/register', register);
router.post('/login', login);

module.exports = router;
