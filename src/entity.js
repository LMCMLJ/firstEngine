function Entity(xCoordinate, yCoordinate, rotation, velocity) {
  this._allInstances = [];

  this.rotation = rotation;
  this.velocity = velocity;
  this.position = {
    x: xCoordinate,
    y: yCoordinate,
  };
}

Entity.prototype.addInstance = function(instance) {
  this._allInstances.push(instance);
};

Entity.prototype.update = function() {
  for (var i = 0, len = _allInstances.length; i < len; i++) {
    _allInstances[i].updatePosition(_allInstances[i]);
  }
};

Entity.prototype.updatePosition = function(self) {
  console.log(self.rotation);
  if(self.rotation === 0) {
    this.position.x = this.position.x + getDX(self);
  }
  else if(self.rotation === 90) {}
  else if(self.rotation === 180) {}
  else if(self.rotation === 270) {}
  else if(self.rotation > 90 && self.rotation < 270) {}
  else {}
};

Entity.prototype.getDX = function(self) {

  return 2 * (1 / self.velocity) * Math.sin(toRadians(self.rotation));
};

Entity.prototype.getDY = function() {

};

var entity = new Entity();
