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
        <div class="form-group">
          <label for="inputUsername" class="sr-only">Email Address</label>
          <input
            type="email"
            v-model="username"
            id="inputUsername"
            class="form-control"
            placeholder="Email address"
            required autofocus>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only ">Password</label>
          <input
            type="password"
            v-model="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password">
          </div>
        <div class="form-group">
          <label for="inputPasswordConfirmation" class="sr-only ">Password</label>
          <input
            type="password"
            v-model="userConfirmPassword"
            id="inputPasswordConfirmation"
            class="form-control"
            placeholder="re-type password">
        </div>
        <div class="form-group">
          <button class="btn btn-lg btn-primary btn-block mt-3" id="submitButton">Submit</button>
        </div>
        <div class="form-group">
          <a href="/login" class="btn btn-lg btn-light btn-block mt-3" id="cancelButton">Cancel</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import * as authController from '../controllers/authController';

export default {
  name: 'RegisterForm',
  data() {
    return {
      errors: [],
      username: null,
      password: null,
      userConfirmPassword: null,
    };
  },
  methods: {
    handleSubmit(e) {
      // prevent from page refresh;
      e.preventDefault();
      // initialize empty errors string;
      this.errors = [];
      // validate passwords and email
      if (!this.validateEmail()) {
        this.errors.push('Please enter a valid email.');
      }
      if (!this.validatePassword()) {
        this.errors.push('Please enter a valid password');
      }

      if (!this.ConfirmPassword()) {
        this.errors.push('Passwords do not match.');
      }
      if (this.errors.length) {
        return;
      }
      // post data
      authController.register(this.username, this.password);
    },
    validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.username);
    },
    validatePassword() {
      // password requires 1 lowercase, 1 uppercase, 1 digit and 1 special character
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}/;
      return passwordRegex.test(this.password);
    },
    ConfirmPassword() {
      return (this.userConfirmPassword === this.password);
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
