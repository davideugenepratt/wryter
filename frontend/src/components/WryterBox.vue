<template>
<div>
  <div class="wryterBox-container">
<<<<<<< HEAD
      <span>{{ wordCount }} / {{wordGoal}}</span>
=======
      <span class="word-count-goal">{{ wordCount }} / {{wordGoal}}</span>
>>>>>>> feature/11
      <br/>
      <textarea name="" id="" cols="100" rows="10"
      v-model='input' and @keyup='countWords()'></textarea>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      input: '',
      wordCount: 0,
      wordGoal: 250,
    };
  },
  methods: {
    countWords() {
      this.wordCount = this.input.match(/\w+/g).length;
    },
  },
};
</script>
