import {openModalHandler} from './modal.js';

const uploadPhoto = (fileInput) => {
  fileInput.addEventListener('change', openModalHandler);
};

export {uploadPhoto};
