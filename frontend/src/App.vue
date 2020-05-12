<template>
  <div>
    <Header />
    <main role="main">
      <div id="app" class="d-flex justify-content-center flex-column h-100">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
#app {
  padding-top: 55px;
}
</style>
