import Vue from 'vue';
import VueGtm from 'vue-gtm';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import interceptors from './api/interceptors';

interceptors();

Vue.config.productionTip = false;

Vue.use(VueGtm, {
  id: process.env.VUE_APP_GTM_ID,
  enabled: true,
  debug: true,
  vueRouter: router,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
