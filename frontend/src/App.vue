<template>
  <div>
    <Header />
    <main role="main">
      <div id="app" class="d-flex justify-content-center flex-column h-100">
        <router-view/>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>
