const axios = require('axios').default;
const jwt = require('jsonwebtoken');

const register = (username, password) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${process.env.VUE_APP_API_ROOT}/auth/register`, {
      username,
      password,
    }).then(() => {
      resolve();
    }, () => {
      reject();
    });
  });

  return promise;
};

const login = (username, password) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${process.env.VUE_APP_API_ROOT}/auth/login`, {
      username,
      password,
    }).then((response) => {
      localStorage['wryter/token'] = response.data.token;
      resolve(response);
    }, (error) => {
      reject(error);
    }).catch((error) => {
      reject(error);
    });
  });

  return promise;
};

const checkToken = () => {
  let response = false;
  let token = localStorage['wryter/token'];
  if (token) {
    token = jwt.decode(token);
    response = new Date() > new Date(token.exp);
  }

  return response;
};

const getToken = () => {
  const token = localStorage['wryter/token'];
  if (token) {
    return token;
  }

  return false;
};

module.exports = {
  register,
  login,
  getToken,
  checkToken,
};
