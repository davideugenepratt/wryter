<template>
  <header>
    <div class="navbar navbar-dark bg-dark box-shadow fixed-top">
      <div class="container d-flex justify-content-between">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <strong>Wryter</strong>
        </a>

        <div v-if="loggedIn" class="dropdown">
          <div
            class="btn dropdown-toggle login-text text-white"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Welcome
          </div>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/writings">Writings</a>
            <a class="dropdown-item" href="#">Settings</a>
            <a href="#" @click="logout" class="dropdown-item">Logout</a>
          </div>
        </div>
        <a v-else href="/login" class="login-text text-white">Login</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  methods: {
    logout(e) {
      e.preventDefault();
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
};
</script>
