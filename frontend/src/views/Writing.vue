<template>
  <div id="writing container " class="writing container">
    <div class="writing__content">
      <div class="writing__image">
        <picture>
          <source media="(max-width: 400px)" v-bind:srcset="this.unsplashData.urls.small" />
          <source media="(max-width: 1080px)" v-bind:srcset="this.unsplashData.urls.full" />
          <img v-bind:src="this.unsplashData.urls.regular" />
        </picture>
      </div>
      <div class="writing__text-content">
        <div class="writing__title">
          <h1>{{ this.writingTitle }}</h1>
        </div>
        <div class="writing__main">
          <p>
            {{ this.writingText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  name: 'writing',
  components: {},
  data() {
    return {
      writingText: String,
      writingTitle: String,
      writingDate: Number,
      unsplashData: Object,
    };
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  created() {
    this.fetchWriting();
  },

  methods: {
    fetchWriting() {
      console.log('fetching data');

      // TODO set loading state logic in store
      // Make API request
      axios
        .get(`${process.env.VUE_APP_API_ROOT}/writing/${this.$route.params.id}`)
        .then((response) => {
          console.log(response);
          const { data } = response;
          this.writingText = data.text;
          this.writingTitle = data.title;
          this.unsplashData = data.unsplashResponse;
        });

      // get response back
      // set writing object to it's values in props
    },
  },
};
</script>
<style scoped lang="scss">
body {
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  .writing {
    position: relative;
    padding: 0;

    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    img {
      width: 100%;
      object-fit: cover;
      margin: 0 auto;
    }

    &__content {
      width: 100%;
      height: 100%;
      background: lightgray;
      display: inline-block;
      position: relative;
    }
    &__text-content {
      padding: 50px;
      width: 50%;
      background: white;
      border-radius: 5px;
      z-index: 10;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
  }
}
</style>
