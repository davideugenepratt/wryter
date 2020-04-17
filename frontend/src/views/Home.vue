<template>
<div>
  <UnsplashImage />
  <WryterBox />
</div>

</template>

<script>
// @ is an alias to /src
import UnsplashImage from '../components/UnsplashImage.vue';
import WryterBox from '../components/WryterBox.vue';

export default {
  name: 'Home',
  components: {
    UnsplashImage,
    WryterBox,
  },
};
</script>
