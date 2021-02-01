const Writing = require('../writing/writingModel');
const { writingStreakInDays, numberOfWordsWritten, numberOfWritings } = require('./statsHelpers');
const Stats = require('./statsModel');

const createStats = (userName) => {
  var promise = new Promise((resolve, reject) => {
    const newStats = new Stats({
      userId: userName,
      writingCount: 0,
      wordCount: 0,
      writingStreakInDays: 0,
    });

    newStats
      .save()
      .then((response) => {
        resolve({ success: true });
      })
      .catch((err) => {
        reject({
          success: false,
          code: 500,
          error: {
            code: err.code,
            errmsg: err.errmsg,
            keyPattern: err.keyPattern,
            keyValue: err.keyValue,
          },
        });
      });
  });
};

const updateStats = async (userName) => {
  try {
    console.log('updating stats:');

    const writings = await Writing.find(
      { author: userName },
      '_id text title slug unsplashResponse.urls created'
    );

    const updatedStats = {
      writingCount: numberOfWritings(writings),
      wordCount: numberOfWordsWritten(writings),
      writingStreakInDays: writingStreakInDays(writings),
    };
    await Stats.findOneAndUpdate({ userId: userName }, updatedStats, {
      useFindAndModify: false,
      new: true,
    });
  } catch (e) {
    console.error(e);
  }

  // run calculations
  //   save as object with new stats
  // find stats and update with username and new stats
};
module.exports = { createStats, updateStats };

// flow on create User
//  call the createStats function
// right now, we save, it waits to get response and then pushes the router to dashboard where the stats are
// new flow would be to post writing to db, wait for response, then calculate the new data
