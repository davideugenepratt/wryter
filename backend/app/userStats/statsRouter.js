var express = require('express');
var router = express.Router();
var statsController = require('./statsController');

router.post('/', statsController.createStats);
router.get('/', statsController.getStatsForUser);
router.put('/', statsController.updateStats);

module.exports = router;
