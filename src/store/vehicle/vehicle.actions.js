import apiService from './../apiService';

const getVehicles = ({ commit }) => {
  apiService.get('/vehicleGroup')
        .then(res => commit('setVehicles', res.data))
        .catch(error => { throw new Error(error); });
};

export default {
  getVehicles
};