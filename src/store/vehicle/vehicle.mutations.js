import { mapVehicleGroup } from './../../models/mappings';

const setVehicles = (state, vehicleGroup) => state.vehicles = mapVehicleGroup(vehicleGroup);
const selectVehicle = (state, vehicle) => state.selectedVehicle = vehicle;

export default {
  setVehicles,
  selectVehicle
};