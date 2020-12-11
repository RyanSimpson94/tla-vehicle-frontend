import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import env from '../env.dev';

Vue.use(VueAxios, axios);

const axiosInstance = axios.create({
  baseURL: env.api.vehicle.url
});

export default axiosInstance;