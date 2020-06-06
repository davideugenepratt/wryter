// might have to require mongoose to work var Writing = require('./writingsModel');
let Writing = require('./writingModel');

let createWriting = function(req, res) {
  const newWriting = new Writing({
      text: req.body.text,
      title: req.body.title,
      author: req.user.username,
      unsplashResponse: req.body.unsplashResponse,
  });
  newWriting.save().then((response) => {
    res.json(response);
  }).catch((err) => {
    res.status(err.code).json(err);
  });
};

let getAllWritings = function(req, res){
  Writing.find({author: req.user.username}, '_id title unsplashResponse.urls created').then(writings => {
    res.json({
      writings,
      stats: {},
    });
  }).catch((err) => {
    res.status(err.code).json(err);
  });
};

let getAllWritingsForUser = function(req, res){
  Writing.find().then(items => {
    res.json(items);
  }).catch((err) => {
    res.status(err.code).json(err);
  });
};

let getWriting = function(req, res){
  const id= req.params.id;
  Writing.findById(id).then(items => {
    res.json(items);
  }).catch((err) => {
    res.status(err.code).json(err);
  });
};

let editWriting = function( req, res){
  const id = req.params.id;
  Writing.findOneAndUpdate(id, req.body,{useFindAndModify: false}).then(items => {
    res.json({});
  }).catch((err) => {
    res.status(err.code).json(err);
  });
};

let deleteWriting = function(req, res) {
  Writing.findByIdAndRemove(req.params.id, (err, user) => {
    res.json({success: true, message: "writing deleted.", user})
  });
};

module.exports = {
  createWriting,
  getAllWritings,
  getAllWritingsForUser,
  getWriting,
  editWriting,
  deleteWriting
};