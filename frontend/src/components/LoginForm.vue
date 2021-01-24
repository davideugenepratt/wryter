<template>
  <div>
    <div class="text-center">
      <form @submit="handleSubmit" class="form-signin">
        <h1 class="mb-3">Login</h1>
        <div v-if="responseError" class="alert alert-danger" role="alert">
          There was a problem logging in. Please check your username and password and try again.
        </div>
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
            required
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only ">Password</label>
          <input
            type="password"
            v-model="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-lg btn-primary btn-block mt-3" id="loginButton">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import * as authController from '../controllers/authController';

export default {
  name: 'LoginForm',
  data() {
    return {
      responseError: null,
      errors: [],
      username: null,
      password: null,
      userConfirmPassword: null,
    };
  },
  methods: {
    handleSubmit(e) {
      const self = this;
      const { $ } = window;
      e.preventDefault();
      authController.login(this.username, this.password).then(
        () => {
          self.$store.dispatch('login');
          $('#authModal').modal('hide');
        },
        () => {
          this.responseError = true;
        },
      );
    },
  },
};
</script>

<style lang="scss">
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
</style>
