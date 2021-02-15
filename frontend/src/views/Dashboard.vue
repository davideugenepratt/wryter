<template>
  <div id="dashboard-container">
    <div class="page-title" style="background-image: url(images/dashboard-hero.jpg);">
      <div class="over"></div>
      <h1>Dashboard</h1>
    </div>
    <div class="container">
      <div class="row">
        <h5 class="section-title sans text-center">Your Wryting Stats</h5>
        <div class="thin text-center">
          <p></p>
        </div>
        <div class="divide10"></div>
        <div class="row text-center facts">
          <div class="col-sm-4">
            <div class="icon-large"><i class="icon-pencil"></i></div>
            <h2 class="sans count-up" :data-countUpValue="stats.words"></h2>
            <p>Words Written</p>
          </div>
          <!--/column -->
          <div class="col-sm-4">
            <div class="icon-large"><i class="icon-docs"></i></div>
            <h2 class="sans count-up" :data-countUpValue="stats.writings"></h2>
            <p>Wrytings</p>
          </div>
          <!--/column -->
          <div class="col-sm-4">
            <div class="icon-large"><i class="icon-calendar-1"></i></div>
            <h2 class="sans count-up" :data-countUpValue="stats.days"></h2>
            <p>Days In a Row</p>
          </div>
          <!--/column -->
        </div>
        <hr />
      </div>
      <div class="portfolio-grid">
        <ul class="isotope items" style="position: relative; height: 953.5px;">
          <li class="item" v-for="writing in writings" :key="writing._id" :id="writing._id">
            <figure class="overlay">
              <a :href="/writing/ + writing.slug"
                ><span class="over"></span>
                <div class="text-overlay caption">
                  <div class="info">
                    <div class="meta">
                      <span class="date">
                        {{ new Date(writing.created).toLocaleDateString() }}
                      </span>
                    </div>
                  </div>
                </div>
                <img v-bind:src="writing.unsplashResponse.urls.small" alt="" />
              </a>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { animateCount } from '../helpers/animationHelpers';

const axios = require('axios').default;

export default {
  name: 'Dashboard',
  data() {
    return {
      writings: [],
      words: 2965,
      // ***These arent hooked up to the backend yet below** they fail with axios call
      stats: {
        words: null,
        writings: null,
        days: null,
      },
      test: 'hello',
    };
  },
  beforeMount() {
    const self = this;
    try {
      axios
        .get(`${process.env.VUE_APP_API_ROOT}/writing/`)
        .then((response) => {
          self.writings = response.data.writings;
          console.log(self.writings);
        })
        .then(() => {
          axios.get(`${process.env.VUE_APP_API_ROOT}/userstats/`).then((response) => {
            self.stats = {
              words: response.data.stats.wordCount,
              writings: response.data.stats.writingCount,
              days: response.data.stats.writingStreakInDays,
            };

            // run animation from here passing the values from db as the end values in the function
          });
        });
    } catch {
      console.log('error');
    }
  },
  updated() {
    // await get writings
    // run helper functions
    // put data in variables and v-bind them to the data elements
    // ** maybe use an animation library to have them count up**

    // only run the animation after data is loaded from db, not initial mount
    if (this.stats.words !== null && this.stats.words !== undefined) {
      const countElements = document.querySelectorAll('.count-up');
      countElements.forEach((el) => {
        this.countUp(el);

        // countUp(el);
      });
    }
  },
  methods: {
    countUp(el) {
      const endValue = parseInt(el.dataset.countupvalue, 10);

      let currentFrame = 0;
      const duration = 1000;
      const frameDuration = 1000 / 24;
      const totalFrames = Math.round(duration / frameDuration);
      const easeFunction = (x) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2);

      const obj = el;
      const timer = setInterval(() => {
        currentFrame += 1;
        const progress = easeFunction(currentFrame / totalFrames);
        const currentCount = Math.round(endValue * progress);

        if (parseInt(obj.innerHTML, 10) !== currentCount) {
          obj.innerHTML = currentCount;
        }

        if (currentFrame === totalFrames) {
          clearInterval(timer);
        }
      }, frameDuration);
    },
  },
};
</script>

<style scoped lang="scss">
#dashboard-container .page-title {
  margin-bottom: 50px;
}

.portfolio-grid {
  margin-bottom: 80px;
}
</style>
