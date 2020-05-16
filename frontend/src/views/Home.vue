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
    //
    $(window).on('scroll resize', () => {
      const value = $(window).scrollTop();
      const windowHeight = $(window).height();
      $('.wryter-box').css('top', `${(windowHeight - 250) - value * 0.5}px`);
      // $('.wryter-box').css();
      //  todo base 500 value on window height and adjust accordingly to that
      //  might have to recalculate with change in window size
    });
    $(window).trigger('scroll');
  },
};
</script>
<style>
body{
  height: 1000px;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
}
.unsplash-image-container{
  position: relative;
}
.wryter-box{
  position: absolute;
  left:50%;
  transform: translateX(-50%)
}
</style>
