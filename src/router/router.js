import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
      path: '/build',
      name: 'build',
      component: () => import(/* webpackChunkName: "build" */ '../views/Build.vue'),
    },
  ],
});
