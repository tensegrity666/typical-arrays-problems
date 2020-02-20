
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
  if (array === undefined || array.length === 0) {
    return 0;
  }
  array.sort((a, b) => {
    return b - a;
  });
  return array[0];
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  toAvg = array.reduce((a, b) => {
    return a + b;
  });
  return toAvg / array.length;
}
