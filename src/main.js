function Main() {
  this.tick = 0;
  this.entity = new Entity();

  function gameLoop() {
    this.entity.update();
    this.tick += 1;
    requestAnimationFrame(gameLoop());
  }
}

Main.prototype.newEntity = function(name) {
  this.name = new Entity();
};

requestAnimationFrame(gameLoop());
