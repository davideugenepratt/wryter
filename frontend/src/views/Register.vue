<template>
  <div id="register-container">
    <RegisterForm/>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';

export default {
  name: 'Register',
  components: { RegisterForm },
};
</script>

<style lang="scss">
  #register-container {
    padding-top: 75px;
  }

  .form-signin {
    margin-top: 60px;
    margin-bottom: 60px;
  }
</style>
