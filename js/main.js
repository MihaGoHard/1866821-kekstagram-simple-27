import {createPhotos} from './data.js';
import {fillPhotos} from './photos.js';
import './setup.js';

const dataPhotos = createPhotos();

fillPhotos(dataPhotos);
