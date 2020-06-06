<template>
  <div class="navbar navbar-default default" role="navigation">
    <div class="navbar-header">
      <div class="navbar-brand">
        <a href ="/" @click="home">
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
          <li v-if="loggedIn" class="dropdown">
            <a href
              class="dropdown-toggle welcome-link"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Welcome <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href @click="dashboard" class="login-text">Dashboard</a></li>
              <li><a href @click="logout" class="login-text">Logout</a></li>
            </ul>
          </li>
          <li v-else><a href="/login" @click="login">Login</a></li>
        </ul>
      </div>
    </div>
  </div>
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
      this.$store.dispatch('/logout');
    },
    login(e) {
      e.preventDefault();
      this.$router.push('/login');
    },
    home(e) {
      e.preventDefault();
      this.$router.push('/');
    },
    dashboard(e) {
      e.preventDefault();
      this.$router.push('/dashboard');
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
