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
    // need to set initial height of writer box before it loads
    $(window).on('scroll resize', () => {
      const imageHeight = $('.unsplash-image-container img').height();
      const value = $(window).scrollTop();
      console.log($('.unsplash-image-container img'), imageHeight, value);
      $('.wryter-box').css('margin-top', `${value * -0.5}px`);
    });
    $(window).trigger('scroll');
  },
};
</script>
<style scoped lang="scss">
  body{
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .wryter-box{
    position: relative;
  }
</style>
