import {createPhotos} from './data.js';
import {fillPhotos} from './photos.js';
import {uploadPhoto} from './upload.js';
import {observModal} from './modal.js';
import {validateSentForm} from './user-form.js';

const dataPhotos = createPhotos();
const fullModalForm = document.querySelector('#upload-select-image');
const fileInput = fullModalForm.querySelector('#upload-file');

fillPhotos(dataPhotos);
uploadPhoto(fileInput);
observModal(fullModalForm);
validateSentForm(fullModalForm);
