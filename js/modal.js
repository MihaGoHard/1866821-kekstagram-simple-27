import {checkPhotoFormat, isEscapeKey} from './util.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeModalBtn = uploadOverlay.querySelector('#upload-cancel');
const fileInput = document.querySelector('#upload-file');
const userForm = document.querySelector('#upload-select-image');
const imgUpload = userForm.querySelector('.img-upload__overlay');

const changeModalGlobalClass = () => {
  document.body.classList.toggle('modal-open');
};

const openModal = () => {
  fileInput.value = '';
  uploadOverlay.classList.remove('hidden');
  toggleUploadOverlayListeners();
  changeModalGlobalClass();
};

const closeModal = () => {
  fileInput.value = '';
  uploadOverlay.classList.add('hidden');
  toggleUploadOverlayListeners();
  changeModalGlobalClass();
};


const openModalHandler = () => {
  if (checkPhotoFormat(fileInput.value)) {
    openModal();
  }
};

const closeModalHandler = () => closeModal();

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

export {setModalChangeListener};
