const getRandFromRange = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const stringIsLimited = (string, length) => {
  const res = string.length <= length;
  return res;
};

const checkPhotoFormat = (path) => {
  const regPath = /.jpg|.jpeg|.png$/;
  return regPath.test(path);
};


const isEscapeKey = (evt) => evt.key === 'Escape';


const getNumberFromPercent = (percent) => (Number(percent.replace('%', '')));

const getPercentFromNumber = (number) => (`${String(number)}%`);

export {
  getRandFromRange,
  stringIsLimited,
  checkPhotoFormat,
  isEscapeKey,
  getNumberFromPercent,
  getPercentFromNumber
};
