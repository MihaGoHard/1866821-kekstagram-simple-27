const isValidNumber = (num) => (typeof num === 'number' && num >= 0) ;

const getRandFromRange = (min, max) => {
  const minIsValid = isValidNumber(min);
  const maxIsValid = isValidNumber(max);

  if (minIsValid && maxIsValid) {
    const index = (min === max ? 0 : 1);
    return Math.round(Math.random() * (max - min + index) + min);
  }

  return NaN;
};

getRandFromRange(30, 10);


const stringIsLimited = (inputStr, lengthLimit) => {

  const strIsValid = ((typeof str === 'string') && (inputStr.length <= lengthLimit));
  const lengthLimitIsValid = isValidNumber(lengthLimit);

  return (strIsValid && lengthLimitIsValid);
};

stringIsLimited('', 0);
