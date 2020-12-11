import Vue from 'vue';
import Vuex from 'vuex';

import state from './vehicle/vehicle.state';
import getters from './vehicle/vehicle.getters';
import mutations from './vehicle/vehicle.mutations';
import actions from './vehicle/vehicle.actions';

// import mockVehicles from './../data/mock-vehicles';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
