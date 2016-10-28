function Main() {
  this.tick = 0;
  this.entity = new Entity();

  while(true) {
    this.entity.update();
    this.tick += 1;
  }
}

Main.prototype.newEntity = function(name) {
  this.name = new Entity();
};
