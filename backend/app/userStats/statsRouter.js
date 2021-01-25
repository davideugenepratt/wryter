var express = require('express');
var router = express.Router();
var statsController = require('./statsController');

router.post('/', statsController.createStats);
router.put('/', statsController.updateStats);
