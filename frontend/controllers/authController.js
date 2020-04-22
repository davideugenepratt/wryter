const axios = require('axios').default;

class AuthController {
  postData() {
    axios.post('http://localhost:3001/auth/register', {
      email: this.userEmail,
      password: this.userPassword,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default AuthController;
