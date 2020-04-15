<template>
<div id="wryterBox-container">
    <textarea name="" id="" cols="200" rows="10" style="resize:none"
    v-model='input' and @keyup='countCharacters()'></textarea>
    <br/>
     <span>{{ wordCount }} / {{wordGoal}}</span>
     <br>
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
    countCharacters() {
      this.wordCount = this.input.match(/\w+/g).length;
    },
  },
};
</script>
