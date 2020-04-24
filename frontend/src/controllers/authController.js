const axios = require('axios').default;

const register = (userEmail, userPassword) => {
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

const login = (userEmail, userPassword) => {
  axios.post('http://localhost:3001/auth/login', {
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
  register,
  login,
};
