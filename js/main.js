import {createPhotos} from './data.js';
import {fillPhotos} from './photos.js';
import {uploadPhoto} from './upload.js';
import {observModal} from './modal.js';

const dataPhotos = createPhotos();
const fileInput = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');

fillPhotos(dataPhotos);
uploadPhoto(fileInput);
observModal(uploadModal);

