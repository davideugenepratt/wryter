var express = require('express');
var router = express.Router();
var User = require('../app/user/user-model');

router.post('/register', function(req, res, next) {
  console.log(req.body);

  if (!validatePassword(req.body.password)){
    return;
  }
  var user = new User({
    'email': req.body.email,
    'password': req.body.password
  });
  
  var result = User.createUser(user).then(function(response){
    res.json(response);
  }).catch(function(error){
    res.status(error.code).json(error);
  });
});

//password validation function ** maybe place in helper file 
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}/;
      return passwordRegex.test(password);
}


module.exports = router;
