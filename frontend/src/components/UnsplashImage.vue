<template>
    <div class="unsplash-image-container">
      <img v-bind:src="imageUrl" />
    </div>
</template>

<script>
const axios = require('axios').default;

export default {
  name: 'UnsplashImage',
  props: {
    msg: String,
  },
  data() {
    return {
      imageUrl: '',
      loading: false,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.loading = true;
      const self = this;
      axios.get('http://localhost:3001/unsplash')
        .then((response) => {
          self.loading = false;
          self.imageUrl = response.data.urls.full;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.unsplash-image-container {
  img {
    max-width: 100%;
  }
}
</style>
