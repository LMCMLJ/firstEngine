function World(screen) {
  this.screen = screen;
  this.tick = 0;
  this.entity = new Entity();

  var self = this;
  function gameLoop() {
    self.update();
    self.draw();
    self.tick += 1;
    requestAnimationFrame(gameLoop);
  }
  gameLoop();
}

World.prototype.draw = function() {
  screen.clearRect(0, 0, 1080, 1920);
  screen.fillRect(this.x, this.y, 100, 100);
};

World.prototype.newEntity = function(name) {
  this.name = new Entity();
};


World.prototype.update = function() {
  this.x += 1;
  this.y += 1;
};


var screen = document.getElementById("screen").getContext("2d");
var world = new World(screen);
