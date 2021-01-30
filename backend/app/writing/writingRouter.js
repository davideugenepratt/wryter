var express = require('express');
var router = express.Router();
var writingController = require('./writingController');

router.post('/', writingController.createWriting);
router.get('/', writingController.getAllWritings);
router.get('/user/:id', writingController.getAllWritingsForUser);
router.get('/:slug', writingController.getWriting);
router.put('/:id', writingController.editWriting);
router.delete('/:id', writingController.deleteWriting);

module.exports = router;
