
exports.min = function min(array) {
  return !array || !array.length ?
    0 :
    array.reduce((tottal, el) =>
      (tottal >= el ? (tottal = el) : tottal));
}

exports.max = function max(array) {
  return !array || !array.length ?
    0 :
    array.reduce((tottal, el) =>
      (tottal <= el ? (tottal = el) : tottal));
}


exports.avg = function avg(array) {
  if (!array || !array.length) {
    return 0
  }
  
  let avg = 0;
  let divider = 0

  for (let i = 0; i < array.length; i++) {
    avg += (array[i])
    divider = (array.length)
  }

  return avg / divider
}
