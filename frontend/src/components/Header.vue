<template>
  <div class="navbar navbar-default default" role="navigation">
    <div class="navbar-header">
      <div class="navbar-brand">
        <a href="/">
          <img src="#" srcset="style/images/logo.png 1x, style/images/logo@2x.png 2x" alt="" />
        </a>
      </div>
      <div class="nav-bars-wrapper">
        <div class="nav-bars-inner">
          <div class="nav-bars" data-toggle="collapse" data-target=".navbar-collapse">
            <span></span>
          </div>
        </div>
      </div>
      <!-- Hiding this for now but we'll want to add these back in another story -->
      <!--
      <div class="header-other">
        <div class="btn-group pull-right text-right">
          <a href="#" class="share-button btn btn-light dropdown-toggle" data-toggle="dropdown">
            <span></span>
            Share
          </a>
          <div class="dropdown-menu">
            <div class="goodshare-wrapper">
              <a href="#" class="goodshare" data-type="fb">Share</a>
              <a href="#" class="goodshare" data-type="tw">Tweet</a>
              <a href="#" class="goodshare" data-type="pt">Pin</a>
              <a href="#" class="goodshare" data-type="tm">Post</a>
            </div>
          </div>
        </div>
      </div>
      -->
    </div>
    <div class="nav-wrapper">
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <!--
          <li><a href="#!">Portfolio <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="index.html">Classic Portfolio</a></li>
              <li><a href="index2.html">Fullscreen Gallery</a></li>
              <li><a href="index3.html">Lightbox Portfolio</a></li>
                <li><a href="index4.html">Flow Gallery</a></li>
            </ul>
          </li>
          <li><a href="#!">Pages <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
            </ul>
          </li>
          <li><a href="#!">Blog <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="blog.html">Tile Blog</a></li>
              <li><a href="blog2.html">Classic Blog</a></li>
              <li><a href="blog-post.html">Blog Post</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
          -->
          <li><a href="#!">Features <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="elements.html">Elements</a></li>
              <li><a href="headings.html">Headings</a></li>
              <li><a href="pricing.html">Pricing Tables</a></li>
              <li><a href="disqus.html">Disqus</a></li>
              <li><a href="icon-budicon.html">Budicon Icons</a></li>
              <li><a href="icon-fontello.html">Fontello Icons</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--
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
  -->
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
