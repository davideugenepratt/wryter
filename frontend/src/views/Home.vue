<template>
  <div id="home-container">
    <UnsplashImage />
    <WryterBox />
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery';
import UnsplashImage from '../components/UnsplashImage.vue';
import WryterBox from '../components/WryterBox.vue';


export default {
  name: 'Home',
  components: {
    UnsplashImage,
    WryterBox,
  },
  data() {
    return {
    };
  },
  mounted() {
    $(window).on('scroll resize', () => {
      const value = $(window).scrollTop();
      console.log($('.unsplash-image-container').height(), value);
      $('.wryter-box').css('margin-top', `${Math.floor((value * -0.5) - 100)}px`);
    });
    $(window).trigger('scroll');
  },
};
</script>
<style scoped lang="scss">
  body {
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  #home-container {
    background: #1e1e1e;
  }

  .wryter-box{
    position: relative;
  }
</style>
