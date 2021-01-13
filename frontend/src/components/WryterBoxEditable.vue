<template>
  <div v-cloak class="wryter-box container">
    <div
      v-if="this.editable && !editingMode"
      class="writing__text-content card"
      style="width:100%;"
    >
      <div class="card__edit-button" target="_blank" href="#" v-on:click="toggleEditingMode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1
            .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805
            2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
          />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0
           0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5
           0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ wryterTitle }}</h5>
        <h6 class="card-subtitle card__date">{{ new Date(this.date).toLocaleDateString() }}</h6>
        <p class="card-text">
          {{ wryterText }}
        </p>
      </div>
    </div>
    <div class="card__textarea">
      <div class="form-group">
        <label for="inputUsername" class="">{{
          this.editable ? '' : 'Give your writing a title!'
        }}</label>
        <input type="text" v-model="wryterTitle" class="form-control" required autofocus />
      </div>
      <form @submit="handleSubmit">
        <div class="form-group">
          <textarea
            :class="{ editing: this.editable }"
            class="form-control form-control-lg wryter-box-textarea lead"
            rows="10"
            v-model="wryterText"
            :placeholder="this.editable ? null : 'there\'s nothing worse than a blank page'"
            v-on:input="updateTextAreaHeight"
            style="resize: none;"
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
    <TitleModal :wryterTitle="wryterTitle" @updateTitle="updateTitle($event)" />
  </div>
</template>

<script>
import * as writingController from '../controllers/writingController';
import TitleModal from './TitleModal.vue';

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
      editingMode: false,
      wryterText: this.text || '',
      wryterTitle: this.title || '',
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
    async handleSubmit(e) {
      e.preventDefault();

      const self = this;
      // e.preventDefault();
      // TODO error handling for empty values.
      // Must have at least a title or text and it must have an image attatched
      if (!this.editable) {
        await writingController.saveWriting(
          this.wryterText,
          this.wryterTitle,
          this.$store.state.unsplashResponse,
        );
        self.$router.push('/dashboard');
      } else {
        await writingController.updateWriting(this.wryterText, this.wryterTitle, this.id);
        this.editingMode = false;
        const el = document.querySelector('.card__textarea');
        el.style.display = 'none';
      }
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
    toggleEditingMode() {
      this.editingMode = !this.editingMode;
      const el = document.querySelector('.card__textarea');
      el.style.display = 'block';
      const textArea = document.querySelector('.wryter-box-textarea');
      textArea.style.fontSize = '14px';
      textArea.style.height = 'inherit';
      textArea.style.height = `${textArea.scrollHeight}px`;
    },
    updateTitle(inputTitle) {
      this.wryterTitle = inputTitle;
      const { $ } = window;
      $('#titleModal').modal('hide');
      this.handleSubmit();
    },

    updateTextAreaHeight(event) {
      const el = event.currentTarget;
      el.style.height = `${el.scrollHeight}px`;
    },
  },
};
</script>

<style scoped lang="scss">
[v-cloak] {
  display: none;
}
.card-text {
  line-height: 1.6;
  font-weight: 300;
  white-space: pre-wrap;
}
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
    height: 300px;
    padding: 30px;
    border: none;
    border-radius: 0;
    &:focus {
      outline: none;
      background: #fff;
    }
  }
  .editing {
    border: 2px solid rgba(28, 28, 28, 0.15);
    border-radius: 5px;
  }
  .card__textarea {
    display: none;
  }

  .wryter-box-title {
    background: #fff;
    font-size: 28px;
    height: 65px;
  }
  .card__edit-button {
    float: right;
  }
  textarea:hover,
  input:hover,
  textarea:active,
  input:active,
  textarea:focus,
  input:focus,
  button:focus,
  button:active,
  button:hover,
  label:focus,
  .btn:active,
  .btn.active {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
</style>
