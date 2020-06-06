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
              >
            </textarea>
            <button class="btn btn-secondary">Save Wryting</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as writingController from '../controllers/writingController';

export default {
  data() {
    return {
      wryterText: '',
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
      this.wordCount = val === '' ? 0 : val.match(/\w+/g).length;
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.wryterText);
      writingController.saveWriting(this.wryterText);
    },
    timer(minutes) {
      clearInterval(this.countdownInterval);
      const inputTimeInMilliseconds = minutes * 60000;
      this.convertMillisecondsToTime(inputTimeInMilliseconds);
      //  get time now();
      /*  scrolling/ tabbing away in some browsers
        stops intervals so we are basing it on Unix time difference */
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
      // set interval for every second
    },
    convertMillisecondsToTime(ms) {
      this.minutesRemaining = this.formatNumberforTimeCode(Math.floor(ms / 60000));
      this.secondsRemaining = this.formatNumberforTimeCode(Math.round((ms % 60000) / 1000));
    },
    formatNumberforTimeCode(number) {
      return number > 9 ? `${number}` : `0${number}`;
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
  }
</style>
