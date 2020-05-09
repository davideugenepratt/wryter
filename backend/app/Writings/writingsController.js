// might have to require mongoose to work var Writing = require('./writingsModel');
let Writing = require('./writingsModel');

let createWriting = function(req, res) {
  console.log(req.body);
  const newWriting = new Writing({
      writing: req.body.writing,
  });
  newWriting.save()
  .then(item => {
      res.send("writing saved to database");
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  };

  module.exports={createWriting};