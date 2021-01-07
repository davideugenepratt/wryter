<template>
  <div>
    <Header />
    <main role="main">
      <div id="app" class="d-flex justify-content-center flex-column h-100">
        <router-view/>
      </div>
    </main>
    <Footer />
    <AuthModal />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AuthModal from './components/AuthModal.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    AuthModal,
  },
};
</script>

<style lang="scss">
  body {
    // overflow: hidden;
  }
</style>
