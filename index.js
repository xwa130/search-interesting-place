require('dotenv').config();
import Vue from 'vue';
import Vuetify from 'vuetify';
import * as VueGoogleMaps from 'vue2-google-maps';
import router from './router';
import store from './store';
import App from './pages/App';
import './node_modules/vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.API_KEY,
    libraries: 'places'
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});