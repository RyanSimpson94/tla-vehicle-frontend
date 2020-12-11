const Vehicle = class Vehicle {
  constructor(id, name, price, trims, imgUrl) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.trims = trims;
    this.imgUrl = imgUrl;
  }
};

export default Vehicle;
export {
  Vehicle
};