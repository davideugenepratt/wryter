const writingStreakInDays = (writingsArr) => {
  // sort array by date(might already be)
  let streakCount = 0;
  const todaysDate = new Date().setUTCHours(0, 0, 0, 0);
  const dayInMs = 86400000;
  let nthDay = 0;
  writingsArr.reverse().every((writing) => {
    if (todaysDate - new Date(writing.created).setUTCHours(0, 0, 0, 0) == nthDay) {
      streakCount++;
      nthDay += dayInMs;
      return true;
    } else if (todaysDate - new Date(writing.created).setUTCHours(0, 0, 0, 0) < nthDay) {
      return true;
    } else {
      return false;
    }
  });

  return streakCount;

  //   TODO: Make this more efficient in version 2
  //   only calculated when a new writing is made
  //  first check if the last writing was on the same day as the previous and return something that says it isnt changing
  //   go to the last writing checked and then check the next one
  //   if that one is more than 1 day, return streak = 0;
  //   else check the rest of array for next day writing; adding it to the current streak( which will be passed in as a param)R
  //
};

const numberOfWritings = (writingsArr) => {
  return writingsArr.length;
};

const numberOfWordsWritten = (writingsArr) => {
  // reduce array
  const wordsWritten = writingsArr
    .map((writing) => writing.text)
    .reduce((acc, currentText) => {
      const textLength =
        !/\S/.test(currentText) || currentText === '0' ? 0 : currentText.match(/\w+/g).length;
      return acc + textLength;
    }, 0);

  return wordsWritten;
  // count words in each
  // add word count to accumulator
  // use word counting function I built in the wryterbox component
};

module.exports = {
  writingStreakInDays,
  numberOfWordsWritten,
  numberOfWritings,
};
