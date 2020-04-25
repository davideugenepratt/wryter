const axios = require('axios').default;

const register = (username, password) => {
  axios.post('http://localhost:3001/auth/register', {
    username,
    password,
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
};

const login = (username, password) => {
  axios.post('http://localhost:3001/auth/login', {
    username,
    password,
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
};

module.exports = {
  register,
  login,
};
