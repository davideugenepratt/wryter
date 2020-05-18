<template>
  <header>
    <div class="navbar navbar-dark bg-dark box-shadow">
      <div class="container d-flex justify-content-between">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <strong>Wryter</strong>
        </a>
        <a v-if="loggedIn" href="#" @click="logout" class="login-text text-white">Logout</a>
        <a v-else href="/login" class="login-text text-white">Login</a>
      </div>
    </div>
  </header>
</template>

<script>
const authController = require('../controllers/authController');

export default {
  name: 'Header',
  computed: {
    loggedIn() {
      if (authController.checkToken()) {
        this.$store.dispatch('login');
      } else {
        this.$store.dispatch('logout');
      }
      return this.$store.state.loggedIn;
    },
  },
  methods: {
    logout(e) {
      e.preventDefault();
      this.$store.dispatch('logout');
    },
  },
};
</script>
<style lang="css">
.navbar{
  z-index: 1;
}

</style>
