import {DEFAULT_PHOTO_SRC} from './setup.js';

const imgPreview = document.querySelector('.img-upload__preview img');
const fileInput = document.querySelector('#upload-file');
const effectListNode = document.querySelector('.effects__list');
const effectList = effectListNode.querySelectorAll('.effects__list .effects__preview');

const checkFileWebSrc = (path) => {
  const regPath = /^blob:http|^blob:https/;
  return regPath.test(path);
};

const createPhotoElem = (dataPhoto) => {
  const minPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const newPhoto = minPhotoTemplate.cloneNode(true);
  newPhoto.querySelector('.picture__img').src = dataPhoto.url;
  newPhoto.querySelector('.picture__likes').textContent = dataPhoto.likes;
  newPhoto.querySelector('.picture__comments').textContent = dataPhoto.comments;
  return newPhoto;
};

const fillPhotos = (dataPhotos) => {
  const domPhotos = document.querySelector('.pictures');
  domPhotos.append(...dataPhotos.map((dataPhoto) => createPhotoElem(dataPhoto)));
};


const getWebPhotoSrc = () => {
  if (fileInput.files.length !== 1) {
    return '';
  }
  const img = fileInput.files[0];
  return window.URL.createObjectURL(img);
};


const toggleMainPreview = (src, isDefaultPhoto) => {

  if (!checkFileWebSrc(src) || isDefaultPhoto) {
    imgPreview.classList.remove('img-upload__img-full');
    imgPreview.src = DEFAULT_PHOTO_SRC;
    return;
  }

  imgPreview.classList.add('img-upload__img-full');
  imgPreview.src = src;
};

const toggleListPreviews = (src, isDefaultPhoto) => {

  if (!checkFileWebSrc(src) || isDefaultPhoto) {
    effectListNode.classList.remove('effects__list--coverd-item');
    effectList.forEach((preview) => {
      preview.removeAttribute('style', 'background-image');
    });

    return;
  }

  effectListNode.classList.add('effects__list--coverd-item');
  effectList.forEach((preview) => {
    preview.style.backgroundImage = `url('${src}')`;
  });
};

const toggleModalPhotos = (src = DEFAULT_PHOTO_SRC) => {
  const isDefaultPhoto = src === DEFAULT_PHOTO_SRC;
  toggleMainPreview(src, isDefaultPhoto);
  toggleListPreviews(src, isDefaultPhoto);
};

export {fillPhotos, toggleModalPhotos, getWebPhotoSrc, checkFileWebSrc};
