function distanceFromHqInBlocks (block) {
  let distance_in_blocks = 42 - block;

  if (distance_in_blocks < 0){
    distance_in_blocks *= -1;
  }

  return distance_in_blocks;
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet () {}

function calculatesFarePrice (start, destination) {}
