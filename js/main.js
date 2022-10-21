import {fillPhotos} from './photos.js';
import {setModalChangeListener} from './modal.js';
import {setUserFormSubmit} from './network/user-form.js';
import {closeModal} from './modal.js';
import {getData} from './network/api.js';
import {showServerAlert} from './alert.js';


const fullModalForm = document.querySelector('#upload-select-image');
const fileInput = fullModalForm.querySelector('#upload-file');


getData(fillPhotos, showServerAlert);
setModalChangeListener(fileInput);
setUserFormSubmit(closeModal);
