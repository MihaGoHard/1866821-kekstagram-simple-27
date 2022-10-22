import {DEFAULT_PHOTO_SRC} from './setup.js';

const imgPreview = document.querySelector('.img-upload__preview img');
const fileInput = document.querySelector('#upload-file');
const effectList = document.querySelectorAll('.effects__list .effects__preview');

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


const toggleMainPreview = (inWebSrc, isDefaultPhoto) => {
  const webSrc = isDefaultPhoto ? DEFAULT_PHOTO_SRC : inWebSrc;

  const setImgProps = () => {
    imgPreview.style.width = '100%';
    imgPreview.style.height = '100%';
    imgPreview.style.objectFit = 'cover';
  };

  const resetImgProps = () => {
    imgPreview.removeAttribute('style', 'width');
    imgPreview.removeAttribute('style', 'height');
    imgPreview.removeAttribute('style', 'object-fit');
  };

  imgPreview.src = webSrc;

  if (isDefaultPhoto) {
    resetImgProps();
    return;
  }

  setImgProps();

  imgPreview.src = webSrc;
};

const toggleListPreviews = (webSrc, isDefaultPhoto) => {

  if (isDefaultPhoto) {
    effectList.forEach((preview) => {
      preview.removeAttribute('style', 'background-image');
      preview.removeAttribute('style', 'background-size');
    });
    return;
  }

  effectList.forEach((preview) => {
    preview.style.backgroundImage = `url('${webSrc}')`;
    preview.style.backgroundSize = 'cover';
  });
};

const toggleModalPhotos = (webSrc, isDefaultPhoto) => {
  toggleMainPreview(webSrc, isDefaultPhoto);
  toggleListPreviews(webSrc, isDefaultPhoto);
};

export {fillPhotos, toggleModalPhotos, getWebPhotoSrc};
