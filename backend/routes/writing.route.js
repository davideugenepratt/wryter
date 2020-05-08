const express = require('express');
const router = express.Router();
const writingController = require('../app/Writings/writingsController')

router.post('/writings', (req, res) => {
    res.json('doing something awesome')
});

module.exports = router;