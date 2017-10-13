import Vue from 'vue';
import Router from 'vue-router';
import Pinefites from '../pages/Pinefites';
import Favorites from '../pages/Favorites';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pinefites'
    },
    {
      path: '/pinefites',
      component: Pinefites,
      name: 'pinefites'
    },
    {
      path: '/favorites',
      component: Favorites,
      name: 'favorites'
    }
  ]
});