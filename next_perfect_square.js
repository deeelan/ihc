function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function findNextSquare(sq) {
  if(isInt(Math.sqrt(sq))){
    return (Math.sqrt(sq) + 1) ** 2;
  }
  return -1;
}