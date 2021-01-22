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
            <h2 class="sans count-up">{{ words }}</h2>
            <p>Words Written</p>
          </div>
          <!--/column -->
          <div class="col-sm-4">
            <div class="icon-large"><i class="icon-docs"></i></div>
            <h2 class="sans count-up">{{ writings.length }}</h2>
            <p>Wrytings</p>
          </div>
          <!--/column -->
          <div class="col-sm-4">
            <div class="icon-large"><i class="icon-calendar-1"></i></div>
            <h2 class="sans count-up">27</h2>
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
import { animateCount } from '../helpers/animationHelpers';

const axios = require('axios').default;

export default {
  name: 'Dashboard',
  data() {
    return {
      writings: [],
      words: 2965,
      // ***These arent hooked up to the backend yet below** they fail with axios call
      stats: {
        words: '2965',
        writings: '74',
        days: '35',
      },
      test: 'hello',
    };
  },
  beforeMount() {
    const self = this;
    try {
      axios.get(`${process.env.VUE_APP_API_ROOT}/writing/`).then((response) => {
        self.writings = response.data.writings;
        self.stats = response.data.stats;
      });
    } catch {
      console.log('error');
    }
  },
  mounted() {
    // await get writings
    // run helper functions
    // put data in variables and v-bind them to the data elements
    // ** maybe use an animation library to have them count up**
    const stats = Object.keys(this.stats);
    stats.forEach((stat) => {
      console.log(stat);

      // this.countUp(stat);
    });

    const countElements = document.querySelectorAll('.count-up');
    countElements.forEach((el) => {
      animateCount(el);
    });
  },
  methods: {
    countUp(prop) {
      console.log(this.stats[prop]);
      this.stats[prop] = 0;

      let count = 0;
      // const frameDuration = 2000 / 60;
      const counter = setInterval(() => {
        console.log(this.stats[prop]);

        count += 1;
        if (count === 10) {
          clearInterval(counter);
        }
      }, 1000);
      // console.log(counter);
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
