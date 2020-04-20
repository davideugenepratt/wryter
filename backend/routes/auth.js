var express = require('express');
var router = express.Router();
var User = require('../app/user/user-model');

/* GET home page. */
router.post('/register', function(req, res, next) {
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



module.exports = router;
