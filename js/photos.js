import './data.js';
import {createPhotos} from './data.js';


const createPhotoElem = (dataPhoto) => {
  const minPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const newPhoto = minPhotoTemplate.cloneNode(true);
  newPhoto.querySelector('.picture__img').src = dataPhoto.url;
  newPhoto.querySelector('.picture__likes').textContent = dataPhoto.likes;
  newPhoto.querySelector('.picture__comments').textContent = dataPhoto.comments;
  return newPhoto;
};

const fillPhotos = () => {
  const dataPhotos = createPhotos();
  const domPhotos = document.querySelector('.pictures');
  const domPhotosFragment = document.createDocumentFragment();
  dataPhotos.forEach( (dataPhoto) => {
    const photo = createPhotoElem(dataPhoto);
    domPhotosFragment.appendChild(photo);
  });
  domPhotos.appendChild(domPhotosFragment);
};

export {fillPhotos};

