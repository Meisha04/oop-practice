class Frame {
// your code here
}

class Tire {
  // your code here
}

class Bike {
  constructor(){
  this.tires = [new Tire, new Tire];
  this.frame = new Frame;
  this.brakes = {
    front: true,
    back: true
  }
  this.rings = [3,7]
}
}

class MountainBike extends Bike {
  constructor() {
    super();
    this.tires[0].type ='dirt';
    this.tires[1].type = 'dirt';
    this.frame.style = 'mountain';
    this.shocks = 20;
}
  adjustShocks(newSagSetting){
    this.shocks = newSagSetting;
  }
}
class BMXBike extends Bike {
  constructor() {
    super();
    this.tires[0].diameter = 20;
    this.tires[1].diameter = 20;
    this.brakes = {
      front: false,
      back: true
    }
  }
}
class RacingBike extends Bike {
      constructor() {
        super();
        this.rings = [3,10];
        this.tires[0].type ='road';
        this.tires[1].type = 'road';
        this.frame.style = 'racing';
        this.brakes = {
          front: true,
          back: true
        }
}
        gearSpeeds(){
  return this.rings[0] * this.rings[1]

      }
}
module.exports = {
  Bike: Bike,
  MountainBike : MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike,
  // you'll need to export new classes here
}
