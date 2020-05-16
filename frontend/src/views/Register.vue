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
