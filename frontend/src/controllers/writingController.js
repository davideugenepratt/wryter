const axios = require('axios').default;

const saveWriting = (text, title, unsplashResponse) => {
  axios.post(`${process.env.VUE_APP_API_ROOT}/writing/`, {
    text,
    title,
    unsplashResponse,
  });
  // TODO: if Error, pass back error to display on wryterbox page and
  // prevent router push to dashboard.
};

const updateWriting = (text, title, id) => {
  axios.put(`${process.env.VUE_APP_API_ROOT}/writing/${id}`, {
    text,
    title,
  });
};

module.exports = {
  saveWriting,
  updateWriting,
};
