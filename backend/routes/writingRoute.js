var express = require('express');
var router = express.Router();
var writingController = require('../app/Writings/writingsController')

router.post('/create', writingController.createWriting);
router.get('/', writingController.getAllWritings);
router.get('/:id', writingController.getWriting);
router.put('/:id', writingController.editWriting);
router.delete('/:id', writingController.deleteWriting)

module.exports = router;
