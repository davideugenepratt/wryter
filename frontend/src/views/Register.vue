<template>
<div>
  <div class="text-center">
    <form @submit="handleSubmit" class="form-signin">
      <h1 class="mb-3">Registration</h1>
      <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      </p>
      <ul>
        <li :key="error" v-for="error in errors">{{ error }}</li>
      </ul>
      <label for="inputEmail" class="sr-only">Email Address</label>
      <input
        type="email"
        v-model="userEmail"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required autofocus>
      <label for="inputPassword" class="sr-only ">Password</label>
      <input
        type="password"
        v-model="userPassword"
        id="inputPassword"
        class="form-control"
        placeholder="Password">
       <label for="inputPasswordConfirmation" class="sr-only ">Password</label>
      <input
        type="password"
        v-model="userConfirmPassword"
        id="inputPasswordConfirmation"
        class="form-control"
        placeholder="re-type password">
      <button class="btn btn-lg btn-primary btn-block mt-3">Submit</button>
    </form>
  </div>
</div>

</template>

<script>
const axios = require('axios');

export default {
  name: 'Register',
  data() {
    return {
      errors: [],
      userEmail: '',
      userPassword: '',
      userConfirmPassword: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.validateEmail()) {
        this.errors.push('Please enter a valid email.');
      }
      // vallidate password
      if (!this.validateConfirmPassword()) {
        this.errors.push('Passwords do not match.');
      }
      if (this.errors.length) {
        return;
      }
      this.postData();
    },
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
    },
    validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.userEmail);
    },
    validateConfirmPassword() {
      return (this.userConfirmPassword === this.userPassword);
    },
  },
};
</script>

<style >
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
</style>
