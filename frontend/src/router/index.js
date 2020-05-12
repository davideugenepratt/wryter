import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import AuthHelper from '../helpers/authHelper';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Writings from '../views/Writings.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/writings',
    name: 'Writings',
    component: Writings,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (AuthHelper.checkToken()) {
      store.dispatch('login');
      next();
    } else {
      store.dispatch('logout');
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
