
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  array.sort((a, b) => {
    return a - b;
  });
  return array[0];
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
