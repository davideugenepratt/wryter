const axios = require('axios').default;

const saveWriting = (text, unsplashResponse) => {
  axios.post(`${process.env.VUE_APP_API_ROOT}/writing/`, {
    text,
    unsplashResponse,
  });
  // TODO: if Error, pass back error to display on wryterbox page and
  // prevent router push to dashboard.
};

const updateWriting = (text, title, id) => {
  axios
    .put(`${process.env.VUE_APP_API_ROOT}/writing/${id}`, {
      text,
      title,
    })
    .then((response) => console.log(response));
};

module.exports = {
  saveWriting,
  updateWriting,
};
