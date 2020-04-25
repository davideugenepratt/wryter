const axios = require('axios').default;

const postData = (userEmail, userPassword) => {
  axios.post('http://localhost:3001/auth/register', {
    email: userEmail,
    password: userPassword,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  postData,
};
