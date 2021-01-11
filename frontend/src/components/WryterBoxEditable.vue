<template>
  <div class="wryter-box container">
    <div class="writing__text-content card" style="width:100%;">
      <div class="card__edit-button">
        <i class="bi-pencil" height="100px" width="100px"></i>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ this.title }}</h5>
        <h6 class="card-subtitle">{{ this.date }}</h6>
        <p class="card-text">
          {{ this.text }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div v-if="!this.editingMode" class="card">
          <form @submit="openTitleModal">
            <div class="form-group">
              <textarea
                class="form-control form-control-lg wryter-box-textarea lead"
                rows="10"
                :placeholder="this.id ? 'there\'s nothing worse than a blank page' : null"
                v-model="wryterText"
                v-on:input="updateTextAreaHeight"
              >
              </textarea>
            </div>
            <div class="form-group">
              <button v-if="loggedIn" class="btn btn-secondary">Save Wryting</button>
              <a href="#" v-else class="btn btn-secondary" @click="authModal">
                Login or Register to Save
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <TitleModal :wryterTitle="wryterTitle" @updateTitle="updateTitle($event)" />
  </div>
</template>

<script>
import * as writingController from '../controllers/writingController';
import TitleModal from './TitleModal.vue';

const axios = require('axios').default;

export default {
  name: 'WryterBoxEditable',
  props: ['title', 'text', 'date', 'id', 'editable'],
  components: {
    TitleModal,
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  data() {
    return {
      editingMode: true,
      wryterText: '',
      wryterTitle: '',
      wordCount: 0,
      wordGoal: 250,
      minutesRemaining: this.formatNumberforTimeCode(0),
      secondsRemaining: this.formatNumberforTimeCode(0),
      timeSelected: 0,
      countdownInterval: null,
      timerProgress: 100,
    };
  },
  watch: {
    wryterText(val) {
      this.wordCount = !/\S/.test(val) || val === '0' ? 0 : val.match(/\w+/g).length;
    },
  },
  methods: {
    fetchWriting() {
      console.log('fetching data');

      // TODO set loading state logic in store
      // Make API request
      axios.get(`${process.env.VUE_APP_API_ROOT}/writing/${this.id}`).then((response) => {
        console.log(response);
        const { data } = response;
        this.writingText = data.text;
        this.writingTitle = data.title;
        this.writingDate = data.created;
        this.unsplashData = {
          full: data.unsplashResponse.urls.full,
          regular: data.unsplashResponse.urls.regular,
          small: data.unsplashResponse.urls.small,
        };
      });

      // get response back
      // set writing object to it's values in props
    },
    async handleSubmit() {
      const self = this;
      // e.preventDefault();
      // TODO error handling for empty values.
      // Must have at least a title or text and it must have an image attatched
      await writingController.saveWriting(
        this.wryterText,
        this.wryterTitle,
        this.$store.state.unsplashResponse,
      );

      self.$router.push('/dashboard');
    },
    timer(minutes) {
      clearInterval(this.countdownInterval);
      const inputTimeInMilliseconds = minutes * 60000;
      this.convertMillisecondsToTime(inputTimeInMilliseconds);
      const currentTime = Date.now();
      const endOfCountdownTime = currentTime + inputTimeInMilliseconds;
      this.countdownInterval = setInterval(() => {
        const msRemaining = endOfCountdownTime - Date.now();
        if (msRemaining <= 0) {
          clearInterval(this.countdownInterval);
          return;
        }
        this.timerProgress = (msRemaining / inputTimeInMilliseconds) * 100;
        this.convertMillisecondsToTime(msRemaining);
      }, 1000);
    },
    convertMillisecondsToTime(ms) {
      this.minutesRemaining = this.formatNumberforTimeCode(Math.floor(ms / 60000));
      this.secondsRemaining = this.formatNumberforTimeCode(Math.round((ms % 60000) / 1000));
    },
    formatNumberforTimeCode(number) {
      return number > 9 ? `${number}` : `0${number}`;
    },
    authModal(e) {
      e.preventDefault();
      const { $ } = window;
      $('#authModal').modal('show');
    },
    openTitleModal(e) {
      e.preventDefault();
      const { $ } = window;
      $('#titleModal').modal('show');
    },
    updateTitle(inputTitle) {
      this.wryterTitle = inputTitle;
      const { $ } = window;
      $('#titleModal').modal('hide');
      this.handleSubmit();
    },
    updateTextAreaHeight(event) {
      const el = event.currentTarget;
      el.style.height = 'inherit';
      el.style.height = `${el.scrollHeight}px`;
    },
  },
};
</script>

<style scoped lang="scss">
.wryter-box.container {
  .word-count-goal {
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    .dropdown {
      width: 50%;

      .btn {
        font-weight: bold;
      }
    }

    .separator {
      margin: 0 10px;
      font-size: 30px;
      font-weight: bold;
    }

    .word-count {
      width: 50%;
      cursor: normal;
      font-weight: bold;
    }
  }

  .progress {
    display: none;
  }

  .wryter-box-textarea {
    padding: 30px;
    border: none;
    border-radius: 0;

    &:focus {
      background: #fff;
    }
  }

  .wryter-box-title {
    background: #fff;
    font-size: 28px;
    height: 65px;
  }
}
</style>
