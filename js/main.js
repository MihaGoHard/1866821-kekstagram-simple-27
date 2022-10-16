import {createPhotos} from './data.js';
import {fillPhotos} from './photos.js';
import {openForm} from './form.js';

const dataPhotos = createPhotos();

fillPhotos(dataPhotos);
openForm();
