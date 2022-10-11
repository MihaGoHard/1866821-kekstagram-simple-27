function isPosNumber(num) {
  return !isNaN(num) && typeof num === 'number' && num >= 0;
}

function isString(str) {
  return typeof str === 'string';
}

function getRandFromRange(min, max) {

  if (isPosNumber(min) && isPosNumber(max)) {
    const index = (min === max ? 0 : 1);
    return Math.round(Math.random() * (max - min + index) + min);
  }

  return NaN;
}

getRandFromRange(0, -10);


function stringIsLimited(inputStr, lengthLimit) {

  if (isString(inputStr) && isPosNumber(lengthLimit) && (inputStr.length <= lengthLimit)) {
    return true;
  }

  return false;
}

stringIsLimited('', 0);
