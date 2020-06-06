import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    unsplashResponse: {},
  },
  mutations: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      Cookies.remove('wryter-token');
      state.loggedIn = false;
    },
    unsplashResponse(state, payload) {
      state.unsplashResponse = payload.unsplashResponse;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
    unsplashResponse(context, unsplashResponse) {
      context.commit('unsplashResponse', {
        unsplashResponse,
      });
    },
  },
  modules: {
  },
});
