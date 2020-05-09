var express = require('express');
var router = express.Router();
var Writing = require('../app/Writings/writingsModel')

let createWriting = function(req, res) {
    console.log(req.body);
    const newWriting = new Writing({
        writing: req.body.writing,
    });
    newWriting.save()
    .then(item => {
        res.send("item saved to database");
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });
    };


router.post('/create', createWriting);
module.exports = router;
