import {photoFormatIsValid, isEscapeKey, callChangeEvent} from './util.js';

const changeModalGlobalClass = () => {
  document.body.classList.toggle('modal-open');
};

const openModal = () => {
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  uploadOverlay.classList.remove('hidden');
  callChangeEvent(uploadOverlay);
  changeModalGlobalClass();
};

const closeModal = () => {
  const fileInput = document.querySelector('#upload-file');
  fileInput.value = '';
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  uploadOverlay.classList.add('hidden');
  callChangeEvent(uploadOverlay);
  changeModalGlobalClass();
};


const openModalHandler = () => {
  const fileInput = document.querySelector('#upload-file');
  if (photoFormatIsValid(fileInput.value)) {
    openModal(fileInput);
  } else {
    alert('Неподдерживаемый формат файла');
  }
};

const closeModalHandler = () => closeModal();

const closeModalKeydownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};


const observModal = (uploadModal) => {
  const closeModalBtn = uploadModal.querySelector('#upload-cancel');
  uploadModal.addEventListener('change', () => {
    if (!uploadModal.classList.contains('hidden')) {
      closeModalBtn.addEventListener('click', closeModalHandler);
      document.addEventListener('keydown', closeModalKeydownHandler);
    } else {
      closeModalBtn.removeEventListener('click', closeModalHandler);
      document.removeEventListener('keydown', closeModalKeydownHandler);
    }
  });
};

export {openModalHandler, observModal};
