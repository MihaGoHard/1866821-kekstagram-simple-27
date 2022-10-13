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

const getPhotos = (length) => {
  const idArr = [];
  while (idArr.length < length) {
    const id = getRandFromRange(1, length);
    if (idArr.indexOf(id) === -1) {
      idArr.push(id);
    }
  }

  const photosArr = [];
  idArr.forEach((id) => {
    photosArr.push(createPhoto(id));
  });

  return photosArr;
};

getPhotos(PHOTOS_NUM);
