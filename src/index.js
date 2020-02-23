
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
  return !array || !array.length ?
  0 :
  array.reduce((tottal, el) =>
      tottal += el) / array.length
}
