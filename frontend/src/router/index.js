import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import AuthHelper from "../helpers/authHelper";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Writing from "../views/Writing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "writing",
    path: "/writing/:id",
    component: Writing,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

router.beforeEach((to, from, next) => {
  console.log("checking token");
  if (AuthHelper.checkToken()) {
    store.dispatch("login");
    next();
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (AuthHelper.checkToken()) {
      store.dispatch("login");
      next();
    } else {
      store.dispatch("logout");
      next({
        path: "/",
        params: { nextUrl: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
