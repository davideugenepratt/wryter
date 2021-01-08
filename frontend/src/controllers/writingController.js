const axios = require('axios').default;

//  Todo add date, timer data and wordgoal to the wryter schema and to the post method
const saveWriting = (writing) => {
  axios.post(`${process.env.VUE_APP_API_ROOT}/writings/create`, { writing });
};

module.exports = {
  saveWriting,
};
