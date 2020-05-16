import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },
  mutations: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      localStorage.removeItem('wryter/token');
      state.loggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  modules: {
  },
});
