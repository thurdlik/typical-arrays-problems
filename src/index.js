
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  let number = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < number) {
      number = array[i];
    }
  }
  return number;
}

exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  let number = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      number = array[i];
    }
  }
  return number;
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  let numbers_sum = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    numbers_sum += array[i];
    count += 1;
  }
  return numbers_sum / count;
}