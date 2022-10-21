import {toggleScaleListeners, resetScale} from './visual/scale.js';
import {toggleEffectsListeners, resetEffects} from './visual/effects.js';
import {toggleUploadOverlayListeners} from './modal.js';
import {updateSlider} from './visual/effect-strength.js';
import {SLIDER_EFFECT_PARAMS} from './setup.js';


const modalIsOpen = document.body.classList.contains('modal-open');

const fileInput = document.querySelector('#upload-file');
const commentArea = document.querySelector('.text__description');

const resetFieldsSettings = () => {
  fileInput.value = '';
  commentArea.value = '';
};

const resetImgSettings = () => {
  resetScale();
  resetEffects();
};

const resetModalSettings = () => {
  resetFieldsSettings();
  resetImgSettings();
  updateSlider(SLIDER_EFFECT_PARAMS['none']);
};

const toggleModalListeners = () => {
  toggleUploadOverlayListeners();
  toggleScaleListeners();
  toggleEffectsListeners();
};

export {toggleModalListeners, resetModalSettings, modalIsOpen};
