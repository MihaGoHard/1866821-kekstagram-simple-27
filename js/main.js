const PHOTOS_NUM = 25;


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

stringIsLimited('', 0);


const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: 'Описание фото',
  likes: getRandFromRange(15, 200),
  comments: getRandFromRange(0, 200)
});

const createPhotos = () => Array.from({length: PHOTOS_NUM}, (_, index) => createPhoto(index + 1));
createPhotos();
