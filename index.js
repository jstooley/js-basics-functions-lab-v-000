function distanceFromHqInBlocks (block) {
  let disntanceInBlocks = 42 - block;

  if (disntanceInBlocks < 0) {
    disntanceInBlocks *= -1;
  }

  return disntanceInBlocks;
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet (start,end) {
  return (start - end) * 264;
}

function calculatesFarePrice (start, destination) {
  const distanceOfFare = distanceTravelledInFeet(start, destination);

  if (distanceOfFare < 400) {
    return 'gives customers a free sample'
  } else if (distanceOfFare =< 2000 ) {
    return distanceOfFare * 0.02;
  } else if (distanceOfFare > 2000 && distanceOfFare =< 2500 ){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
