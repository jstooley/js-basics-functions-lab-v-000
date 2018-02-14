function distanceFromHqInBlocks (block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet (block) {
  return (distanceFromHqInBlocks(block) * 264);
}

function distanceTravelledInFeet (start,end) {
  return (Math.abs(start - end) * 264);
}
