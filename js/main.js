import {createPhotos} from './data.js';
import {fillPhotos} from './photos.js';
import {setModalChangeListener} from './modal.js';
import {setUserFormSubmit} from './network/user-form.js';
import {closeModal} from './modal.js';

const dataPhotos = createPhotos();
const fullModalForm = document.querySelector('#upload-select-image');
const fileInput = fullModalForm.querySelector('#upload-file');

fillPhotos(dataPhotos);
setModalChangeListener(fileInput);
setUserFormSubmit(closeModal);
