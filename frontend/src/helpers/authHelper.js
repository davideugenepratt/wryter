const jwt = require('jsonwebtoken');
const Cookies = require('js-cookie');

const checkToken = () => {
  let response = false;
  let token = Cookies.get('wryter-token');
  if (token) {
    token = jwt.decode(token);
    response = new Date() > new Date(token.exp);
  }

  return response;
};

const getToken = () => {
  const token = Cookies.get('wryter-token');
  if (token) {
    return token;
  }

  return false;
};

module.exports = {
  getToken,
  checkToken,
};
