import {getRandFromRange} from './util.js';
import {PHOTOS_NUM} from './setup.js';

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: 'Описание фото',
  likes: getRandFromRange(15, 200),
  comments: getRandFromRange(0, 200)
});

const createPhotos = () => Array.from({length: PHOTOS_NUM}, (_, index) => createPhoto(index + 1));

export {createPhotos};

