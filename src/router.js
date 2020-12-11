import Vue from 'vue';
import VueRouter from 'vue-router';

/* Views */
import VehicleSelect from './views/VehicleSelect';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: VehicleSelect
  }
];

Vue.use(VueRouter);

export default new VueRouter({
  routes: routes
});