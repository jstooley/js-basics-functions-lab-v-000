function distanceFromHqInBlocks (block) {
  let disntanceInBlocks = 42 - block;

  if (disntanceInBlocks < 0){
    disntanceInBlocks *= -1;
  }

  return disntanceInBlocks;
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet (start,end) {
  return (start - end) * 264
}

function calculatesFarePrice (start, destination) {
  distanceOfFare = distanceTravelledInFeet(start, destination)
}
