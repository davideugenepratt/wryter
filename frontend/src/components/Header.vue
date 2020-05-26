<template>
  <div class="navbar navbar-default default" role="navigation">
    <div class="navbar-header">
      <div class="navbar-brand">
        <a href="/">
          Wryter
        </a>
      </div>
      <div class="nav-bars-wrapper">
        <div class="nav-bars-inner">
          <div class="nav-bars" data-toggle="collapse" data-target=".navbar-collapse">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-wrapper">
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li v-if="loggedIn">
            <a href="#!">Welcome <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="logout">Logout</a></li>
            </ul>
          </li>
          <li v-else><a href="/login">Login</a></li>
        </ul>
      </div>
    </div>
  </div>
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

<style lang="scss">
  .navbar-brand a {
    color: #FFF;
    font-weight: bold;
  }
</style>
