<template>
<div id="#app">
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
    $(window).scroll(() => {
      const value = $(window).scrollTop();
      const windowHeight = $(window).height();
      $('.wryter-box').css('top', `${(windowHeight - 250) - value * 0.5}px`);
      console.log(`${value}px from top`);
      // $('.wryter-box').css();

      //  todo base 500 value on window height and adjust accordingly to that
      //  might have to recalculate with change in window size
    });
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
}
</style>
