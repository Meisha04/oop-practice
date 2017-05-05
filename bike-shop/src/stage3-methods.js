function Bike() {
  this._Moving = false;
  this.tires = [new Tire(), new Tire()];
  this.rings = [3, 7];
}

 Bike.prototype.isMoving = function() {
 return this._Moving;
    }
Bike.prototype.brake = function() {
return this._Moving = false;
}
Bike.prototype.pedal = function(){
  if (this.tires[0]._flat || this.tires[1]._flat) {
       throw Error ("Can't pedal with a flat tire")
     }else{
     this._Moving = true;
   }
}
Bike.prototype.gearSpeeds = function() {
  this._Moving = true;
}
Bike.prototype.gearSpeeds = function() {
  return this.rings[0] * this.rings[1];

}
function Frame() {
  // your code here
}

function Tire() {
  this._flat= false;
}
  Tire.prototype.isFlat = function(isFlat) {
  return this._flat;
}
Tire.prototype.puncture = function() {
 this._flat = true;


}
Tire.prototype.repair = function() {
  this._flat = false;
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
