function getTravelDistance(velocity, rotation){
  var x = (1 / velocity) * Math.sin(toRadians(rotation));
}

function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}
