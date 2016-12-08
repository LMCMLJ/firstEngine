window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var tick = 0;
  newEntity = new Entity();
  var entities = [newEntity];
  var resolution = 32;
  var canvasSize = 640;

  function gameLoop() {
    tick += 1;
    entities.forEach(function(entity) {
      updatePosition(entity);
    });
    entities.forEach(function(entity) {
      draw(entity);
    });
    requestAnimationFrame(gameLoop);
  }
  gameLoop();
  window.addEventListener('keydown',doKeyDown,true);

  function updatePosition(entity) {
    var head = entity.getHeadPosition();
    entity.move(head);
    entity.position.pop();

    entity.checkBoundary();
  }

  function draw(entity) {
    screen.clearRect(0, 0, canvasSize, canvasSize);
    entity.position.forEach(function(cube) {
      screen.fillRect(cube[0] * resolution, cube[1] * resolution, resolution, resolution);
    });
  }

  function Entity() {
    this.direction = 'down';
    this.position = [[10, 10]];
  }

  Entity.prototype.getHeadPosition = function () {
    return this.position[0];
  };

  Entity.prototype.checkBoundary = function () {
    if (this.position[0][0] >= resolution){
      this.position[0][0] = 0;
    }
    else if (this.position[0][1] >= resolution){
      this.position[0][1] = 0;
    }
    else if (this.position[0][0] < 0){
      this.position[0][0] = resolution - 1;
    }
    else if (this.position[0][1] < 0){
      this.position[0][1] = resolution - 1;
    }
  };

  Entity.prototype.move = function(head) {
    if (this.direction === 'down'){
      this.position.unshift([head[0], head[1] + 1]);
    }
    else if (this.direction === 'up'){
      this.position.unshift([head[0], head[1] - 1]);
    }
    else if (this.direction === 'left'){
      this.position.unshift([head[0] - 1, head[1]]);
    }
    else if (this.direction === 'right'){
      this.position.unshift([head[0] + 1, head[1]]);
    }
  };

  function doKeyDown(evt){
    switch (evt.keyCode) {
      case 38:
        if(entity.direction != 'down'){
          entity.direction = 'up';
        }
      break;
      case 40:
        if(entity.direction != 'up'){
          entity.direction = 'down';
        }
      break;
      case 37:
        if(entity.direction != 'right'){
          entity.direction = 'left';
        }
      break;
      case 39:
        if(entity.direction != 'left'){
          entity.direction = 'right';
        }
      break;
    }
  }
};
