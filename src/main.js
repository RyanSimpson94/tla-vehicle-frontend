import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

/* Global Components */
Vue.component('app-button', () => import('./components/base/BaseButton.vue'));
Vue.component('app-placeholder-img', () => import('./components/base/ImgPlaceholder.vue'));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
