function Bike(name = "Speedster", price = 250.00, tires = 2, rings = [3,7], brakes= {front:true , back:true}){
  this.name = name;
  this.price = price;
  this.tires = [new Tire(), new Tire()];
  this.rings = rings;
  this.brakes = brakes;
  this.frame = new Frame();
}

function Frame(color = "black", size =55, style ="street") {
  this.color = color;
  this.size = size;
  this.style = style;

}
function Tire(diameter = 22, type = 'street') {
  this.diameter = diameter;
  this.type = type;

}
module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}

const myFrame = new Frame();
const myBike = new Bike();
const myTire = new Tire();
