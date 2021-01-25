const Writing = require('../writing/writingModel');
const Stats = require('./statsModel');

const createStats = (req, res) => {
  // create some stats initialized to 0;
  const newStats = new Stats({
    userId: req.user.username,
    writingCount: 0,
    wordCount: 0,
    writingStreakInDays: 0,
  });

  newStats
    .save()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(err.code).json(err);
    });
};

const updateStats = (req, res) => {
  // find writings by userId
  // run calculations
  //   save as object with new stats
  // find stats and update with username and new stats
};
module.exports = { createStats };

// flow on create User
//  call the createStats function

// right now, we save, it waits to get response and then pushes the router to dashboard where the stats are
// new flow would be to post writing to db, wait for response, then calculate the new data
