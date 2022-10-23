import {checkPhotoFormat, isEscapeKey} from './util.js';
import {toggleModalListeners, resetModalSettings} from './common.js';
import {ALERT_ERROR_CLASS} from './setup.js';
import {toggleAlertElement} from './alert.js';
import {toggleModalPhotos, getWebPhotoSrc, checkFileWebSrc} from './photos.js';


const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeModalBtn = uploadOverlay.querySelector('#upload-cancel');
const fileInput = document.querySelector('#upload-file');
const userForm = document.querySelector('#upload-select-image');
const imgUpload = userForm.querySelector('.img-upload__overlay');

const changeModalGlobalClass = () => {
  document.body.classList.toggle('modal-open');
};

const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  changeModalGlobalClass();
  toggleModalListeners();
};

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  changeModalGlobalClass();
  toggleModalListeners();
  resetModalSettings();
};


const openModalHandler = () => {
  const fileWebSrc = getWebPhotoSrc();

  if (checkPhotoFormat(fileInput.value) && checkFileWebSrc(fileWebSrc)) {
    toggleModalPhotos(fileWebSrc, false);
    openModal();
  } else {
    toggleAlertElement(ALERT_ERROR_CLASS);
  }
};

const closeModalHandler = () => {
  closeModal();
  toggleModalPhotos('', true);
};

const closeModalKeydownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function toggleUploadOverlayListeners () {
  const method = imgUpload.classList.contains('hidden') ? 'removeEventListener' : 'addEventListener';
  closeModalBtn[method]('click', closeModalHandler);
  document[method]('keydown', closeModalKeydownHandler);
}

const setModalChangeListener = (inputNode) => {
  inputNode.addEventListener('change', openModalHandler);
};

export {
  setModalChangeListener,
  toggleUploadOverlayListeners,
  closeModal,
  imgUpload
};
