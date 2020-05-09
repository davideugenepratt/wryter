var express = require('express');
var router = express.Router();
//  var Writing = require('../app/Writings/writingsModel');
var writingController = require('../app/Writings/writingsController')

router.post('/create', writingController.createWriting);

module.exports = router;
