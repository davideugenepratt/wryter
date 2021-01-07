<template>
    <div class="modal fade" id="authModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <LoginForm v-if="screen === 'login'" />
                    <RegisterForm v-else />

                    <div class="form-group form-signin" id="registerButton" >
                        <a
                          href
                          v-if="screen === 'login'"
                          class="btn btn-lg btn-secondary btn-block mt-3"
                          @click="register"
                        >
                            Register
                        </a>
                        <a
                          href
                          v-else
                          class="btn btn-lg btn-light btn-block mt-3"
                          @click="login"
                        >
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

export default {
  name: 'AuthModal',
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      screen: 'login',
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      this.screen = 'register';
    },
    login(e) {
      e.preventDefault();
      this.screen = 'login';
    },
  },
};
</script>

<style lang="scss" >
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 0 15px;
        margin: 0 auto;
    }
</style>
