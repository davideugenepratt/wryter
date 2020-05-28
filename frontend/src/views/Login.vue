<template>
  <div id="login-container" class="d-flex flex-column align-items-center">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'Login',
  components: { LoginForm },
};
</script>

<style lang="scss">
  #login-container {
    padding-top: 75px;
  }

  .form-signin {
    margin-top: 60px;
    margin-bottom: 60px;
  }
</style>
