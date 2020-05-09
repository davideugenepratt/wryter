const express = require('express');
const router = express.Router();
const writingController = require('../app/Writings/writingsController')

router.post('/writings', writingController.createWriting);

module.exports = router;