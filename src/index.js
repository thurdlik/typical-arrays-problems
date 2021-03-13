
exports.min = function min () {
  let number = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < number) {
      number = arguments[i];
    }
  }
  return number
}

exports.max = function max () {
  let number = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > number) {
      number = arguments[i];
    }
  }
  return number
}

exports.avg = function avg () {
  let numbers_sum = 0;
  let count = 0;
  for (let i = 0; i < arguments.length; i++) {
    numbers_sum += arguments[i];
    count += 1
  }
return numbers_sum / count
}