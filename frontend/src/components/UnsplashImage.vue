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
          console.log('test3442323a', response); // eslint-disable-line
          self.loading = false;
          self.imageUrl = response.data.urls.full;
        }, (response) => {
          console.log('test3442323b', response); // eslint-disable-line
        }).catch((response) => {
          console.log('test3442323c', response); // eslint-disable-line
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.unsplash-image-container {
  display: inline-flex;

  img {
    max-width: 100%;
    width: auto;
    height: auto;
    margin: 0 auto;
  }
}
</style>
