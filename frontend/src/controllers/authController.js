const axios = require('axios').default;
const Cookies = require('js-cookie');

const register = (username, password) => {
  axios.post('http://localhost:3001/auth/register', {
    username,
    password,
  });
};

const login = (username, password) => {
  const promise = new Promise((resolve, reject) => {
    axios.post('http://localhost:3001/auth/login', {
      username,
      password,
    }).then((response) => {
      Cookies.set('wryter-token', response.data.token);
      resolve(response);
    }, (error) => {
      reject(error);
    }).catch((error) => {
      reject(error);
    });
  });

  return promise;
};

module.exports = {
  register,
  login,
};
