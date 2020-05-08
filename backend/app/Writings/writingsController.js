// might have to require mongoose to work 
const Writing = require('./writingsModel')

exports.createWriting = (req, res) => {
  const newWriting = new Writing({
      writing: req.body.writing,
  });
  newWriting.save((err, newWriting) => {
    if (err) res.send(err);
    res.json(newWriting);
  });
};