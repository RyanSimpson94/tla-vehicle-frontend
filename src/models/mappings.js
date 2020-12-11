import Vehicle from "./Vehicle";
import VehicleGroup from "./VehicleGroup";

const mapVehicles = (vehicles) => {
  if (!vehicles) return [];
  return vehicles.map(v => new Vehicle(v.id, v.displayName, v.displayPrice, mapVehicleGroup(v.trims), v.imgUrl));
};

const mapVehicleGroup = (group) => {
  if (!group) return [];
  return group.map(g => new VehicleGroup(g.id, mapVehicles(g.vehicles)));
}

export {
  mapVehicles,
  mapVehicleGroup
};