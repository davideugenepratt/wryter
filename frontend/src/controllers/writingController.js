const axios = require("axios").default;

const saveWriting = (text, title, unsplashResponse) => {
  axios.post(`${process.env.VUE_APP_API_ROOT}/writing/`, {
    text,
    title,
    unsplashResponse
  });
};

module.exports = {
  saveWriting
};
