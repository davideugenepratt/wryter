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
          <p>
            Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis
            euismod. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut
            id elit.
          </p>
        </div>
        <div class="divide10"></div>
        <div class="row text-center facts">
          <div class="col-sm-4">
            <div class="icon-large"><i class="icon-pencil"></i></div>
            <h2 class="sans">7518</h2>
            <p>Words Written</p>
          </div>
          <!--/column -->
          <div class="col-sm-4">
            <div class="icon-large"><i class="icon-docs"></i></div>
            <h2 class="sans">3472</h2>
            <p>Different Writings</p>
          </div>
          <!--/column -->
          <div class="col-sm-4">
            <div class="icon-large"><i class="icon-calendar-1"></i></div>
            <h2 class="sans">2184</h2>
            <p>Days This Month</p>
          </div>
          <!--/column -->
        </div>
        <hr />
      </div>
      <div class="portfolio-grid">
        <ul class="isotope items" style="position: relative; height: 953.5px;">
          <li class="item" v-for="writing in writings" :key="writing._id">
            <figure class="overlay">
              <a href="index2.html"
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
const axios = require('axios').default;

export default {
  name: 'Dashboard',
  data() {
    return {
      writings: [],
      stats: {
        words: '2965',
        writings: '74',
        days: '35',
      },
    };
  },
  beforeMount() {
    const self = this;
    axios.get(`${process.env.VUE_APP_API_ROOT}/writing/`).then((response) => {
      self.writings = response.data.writings;
      self.stats = response.data.stats;
      console.log(self.writings);
    });
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
