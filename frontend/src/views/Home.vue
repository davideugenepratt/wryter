<template>
  <div id="home-container">
    <UnsplashImage />
    <WryterBox />
    <TourGuide />
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery';
import UnsplashImage from '../components/UnsplashImage.vue';
import WryterBox from '../components/WryterBox.vue';
import TourGuide from '../components/TourGuide.vue';

export default {
  name: 'Home',
  components: {
    UnsplashImage,
    WryterBox,
    TourGuide,
  },
  data() {
    return {
    };
  },
  mounted() {
    // TODO add ui to the image that suggests that it's clickable to toggle full screen
    // and add close button to page when clicked
    $('.unsplash-image-container').on('click', () => {
      $('.wryter-box').toggleClass('hidden');
      $('.unsplash-image-container').toggleClass('full-screen');
    });
    $(window).on('scroll resize', () => {
      const value = $(window).scrollTop();
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
  .unsplash-image-container.full-screen{
  transform: scale(1.2);
  position: relative;
  transition: all .5s;
    :hover{
      cursor: zoom-out;
    }
}
.unsplash-image-container{
  position: relative;
  transition: all .5s;
  :hover{
    cursor: zoom-in;
  }
}
  .wryter-box {
  position: relative;
  transition: scale, opacity .5s;
  opacity: 1
}
.wryter-box.hidden{
  transition: scale, opacity .5s;
  opacity: 0;
}
</style>
