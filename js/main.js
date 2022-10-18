import {createPhotos} from './data.js';
import {fillPhotos} from './photos.js';
import {setModalChangeListener} from './modal.js';
import {setSubmitFormListener} from './user-form.js';

const dataPhotos = createPhotos();
const fullModalForm = document.querySelector('#upload-select-image');
const fileInput = fullModalForm.querySelector('#upload-file');

fillPhotos(dataPhotos);
setModalChangeListener(fileInput);
setSubmitFormListener(fullModalForm);
