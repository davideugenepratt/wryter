<template>
  <div class="wryter-box container">
    <div class="row">
      <div class="col-12">
        <form @submit="handleSubmit">
          <div class="form-group">
            <textarea
              class="form-control form-control-lg wryter-box-textarea lead"
              rows="10"
              placeholder="There's nothing worse than a blank page ..."
              v-model='wryterText'
              v-on:input='updateTextAreaHeight'
              >
            </textarea>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control input-lg lead wryter-box-title"
              placeholder="Now just add a title ..."
              v-model='wryterTitle'
            />
          </div>
          <div class="form-group">
            <button v-if="loggedIn" class="btn btn-secondary">Save Wryting</button>
            <a
              href="#"
              v-else
              class="btn btn-secondary"
              @click="authModal"
            >
              Login or Register to Save
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as writingController from '../controllers/writingController';

export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  data() {
    return {
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
      this.wordCount = (!/\S/.test(val) || val === '0') ? 0 : val.match(/\w+/g).length;
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      writingController.saveWriting(
        this.wryterText,
        this.wryterTitle,
        this.$store.state.unsplashResponse,
      );
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
      background: #FFF;
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
        background: #FFF;
      }
    }

    .wryter-box-title {
      background: #FFF;
      font-size: 28px;
      height: 65px;
    }
  }
</style>
