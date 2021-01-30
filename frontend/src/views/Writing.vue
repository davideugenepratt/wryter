<template>
  <div id="writing  " class="writing container">
    <div v-if="loading" class="loading">
      lading...
    </div>
    <div v-else class="writing__content">
      <wryterBoxEditable
        class="writing__text-content"
        :editable="true"
        :id="this.writingId || null"
        :text="this.writingText"
        :title="this.writingTitle"
        :date="this.writingDate"
      />
      <div class="writing__image">
        <picture>
          <source media="(max-width: 400px)" v-bind:srcset="this.unsplashData.small" />
          <source media="(max-width: 1080px)" v-bind:srcset="this.unsplashData.full" />
          <img v-bind:src="this.unsplashData.regular" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import WryterBoxEditable from '../components/WryterBoxEditable.vue';

const axios = require('axios').default;

export default {
  name: 'writing',
  components: { WryterBoxEditable },
  data() {
    return {
      loading: true,
      writingId: '',
      writingText: '',
      writingTitle: '',
      writingDate: '',
      unsplashData: '',
    };
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  created() {
    this.fetchWriting();
  },

  methods: {
    async fetchWriting() {
      // TODO set loading state logic in store
      // Make API request
      await axios
        .get(`${process.env.VUE_APP_API_ROOT}/writing/${this.$route.params.slug}`)
        .then((response) => {
          const { data } = response;
          /* eslint no-underscore-dangle: 0 */
          this.writingId = data._id;
          this.writingText = data.text;
          this.writingTitle = data.title;
          this.writingDate = data.created;
          this.unsplashData = {
            full: data.unsplashResponse.urls.full,
            regular: data.unsplashResponse.urls.regular,
            small: data.unsplashResponse.urls.small,
          };
        });
      this.loading = false;

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
    &__image {
      width: 100%;
      min-height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
    }
    img {
      height: 100vh;
      min-width: 100%;
      object-fit: cover;
      margin: 0 auto;
    }

    &__content {
      width: 100%;
      background: lightgray;
    }
    &__text-content {
      margin-top: 10%;
      margin-bottom: 25%;
      padding: 50px;
      width: 75%;
      position: relative;
      object-position: center;
      background: white;
      border-radius: 5px;
      z-index: 10;
      text-align: center;
    }
  }
}
</style>
