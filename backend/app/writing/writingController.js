// might have to require mongoose to work var Writing = require('./writingsModel');
const { default: slugify } = require('slugify');
let Writing = require('./writingModel');
var statsController = require('../userStats/statsController');

let createWriting = function (req, res) {
  const title = req.body.text.split(' ').slice(0, 3).join(' ');
  console.log(`title: ${title}`);

  const newWriting = new Writing({
    text: req.body.text,
    title: title,
    slug: slugify(title),
    author: req.user.username,
    unsplashResponse: req.body.unsplashResponse,
  });
  newWriting
    .save()
    .then((response) => {
      res.json(response);
    })
    .then(statsController.updateStats(req.user.username))
    .catch((err) => {
      res.status(err.code).json(err);
    });
};

let getAllWritings = function (req, res) {
  Writing.find({ author: req.user.username }, '_id title slug unsplashResponse.urls created')
    .then((writings) => {
      res.json({
        writings,
        stats: {},
      });
    })
    .catch((err) => {
      res.status(err.code).json(err);
    });
};

let getAllWritingsForUser = function (req, res) {
  Writing.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.status(err.code).json(err);
    });
};

let getWriting = function (req, res) {
  const slug = req.params.slug;
  Writing.findOne({ slug: slug })
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.status(err.code).json(err);
    });
};

let editWriting = async function (req, res) {
  const id = req.params.id;

  await Writing.findOneAndUpdate({ _id: id }, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((doc) => {
      res.json({ success: true, message: 'writing updated.', doc });
    })
    .catch((err) => {
      res.status(err.code).json(err);
    });
};

let deleteWriting = function (req, res) {
  Writing.findByIdAndRemove(req.params.id, (err, user) => {
    res.json({ success: true, message: 'writing deleted.', user });
  });
};

module.exports = {
  createWriting,
  getAllWritings,
  getAllWritingsForUser,
  getWriting,
  editWriting,
  deleteWriting,
};
