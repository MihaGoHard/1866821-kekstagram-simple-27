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

  const lengthLimitIsValid = isValidNumber(lengthLimit);

  const inputIsStr = (typeof inputStr === 'string');

  return (inputIsStr && lengthLimitIsValid && (inputStr.length <= lengthLimit));
};

stringIsLimited('', 0);
