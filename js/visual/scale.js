import {MAX_SCALE_VALUE, MIN_SCALE_VALUE, SCALE_STEP, POINT_INDEX} from '../setup.js';
import {getPercentFromNumber, getNumberFromPercent} from '../util.js';
import {imgUpload} from '../modal.js';


const scaleNode = document.querySelector('.img-upload__scale');
const scaleInput = scaleNode.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const resetScale = () => {
  imgPreview.setAttribute('style', 'transform: none;');
};


const changeScale = (isUpScale, currScaleValue) => {

  if (isUpScale) {
    currScaleValue += SCALE_STEP;
  } else {
    currScaleValue -= SCALE_STEP;
  }

  const pointScaleValue = currScaleValue / POINT_INDEX;
  imgPreview.setAttribute('style', `transform: scale(${pointScaleValue});`);
  scaleInput.value = getPercentFromNumber(currScaleValue);
};

const changeScaleHandler = (evt) => {
  const isScaleUpKey = evt.target.classList.contains('scale__control--bigger');
  const isScaleDownKey = evt.target.classList.contains('scale__control--smaller');

  const currScaleValue = getNumberFromPercent(scaleInput.value);

  const canUp = (currScaleValue < MAX_SCALE_VALUE);
  const canDown = (currScaleValue > MIN_SCALE_VALUE);

  if ((isScaleUpKey && canUp) || (isScaleDownKey && canDown)) {
    changeScale(isScaleUpKey, currScaleValue);
  }
};


function toggleScaleListeners () {
  const method = imgUpload.classList.contains('hidden') ? 'removeEventListener' : 'addEventListener';
  scaleNode[method]('click', changeScaleHandler);
}

export {toggleScaleListeners, resetScale};
