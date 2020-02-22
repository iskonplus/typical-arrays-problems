
exports.min = function min(array) {
  if (!array) {
    return 0
  }
  let min = 0;

  for (let i = 0; i < array.length; i++) {
    (array[i] < min || !min) && (min = array[i])
  }

  return min
}

exports.max = function max(array) {
  if (!array) {
    return 0
  }
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    max <= array[i] && (max = array[i])
  }

  return max
}


exports.avg = function avg(array) {
  if (!array) {
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
