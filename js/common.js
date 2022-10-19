import {toggleScaleListeners, resetScale} from './visual/scale.js';
import {toggleEffectsListeners, resetEffects} from './visual/effects.js';
import {toggleUploadOverlayListeners} from './modal.js';

const toggleAppListeners = () => {
  toggleUploadOverlayListeners();
  toggleScaleListeners();
  toggleEffectsListeners();
};

const resetImgSettings = () => {
  resetScale();
  resetEffects();
};

export {toggleAppListeners, resetImgSettings};
