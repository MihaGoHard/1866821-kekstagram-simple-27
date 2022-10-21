import {imgUpload} from '../modal.js';
import {updateSlider} from './effect-strength.js';
import {SLIDER_EFFECT_PARAMS} from '../setup.js';

const effectsList = document.querySelector('.effects__list');
const previewImg = document.querySelector('.img-upload__preview img');
const imgClasslist = previewImg.classList;

const exchangeInputsAttr = (currCheckedInput) => {

  const prevCheckedInput = effectsList.querySelector('[checked]');

  prevCheckedInput.removeAttribute('checked');
  currCheckedInput.setAttribute('checked', '');
  currCheckedInput.checked = 'checked';
};


const removeEffectClasses = () => {
  const imgEffectClassPart = 'effects__preview--';

  imgClasslist.forEach((selector) => {
    if(selector.includes(imgEffectClassPart)) {
      imgClasslist.remove(selector);
    }
  });
};

const resetEffects = () => {
  const noEffectElem = effectsList.querySelector('#effect-none');
  removeEffectClasses();
  exchangeInputsAttr(noEffectElem);
};

const exchangeEffectClasses = (effectName) => {
  const imgEffectClassPart = 'effects__preview--';

  removeEffectClasses();

  if (effectName !== 'none') {
    imgClasslist.add(imgEffectClassPart + effectName);
  }
};

const changeEffectHandler = (evt) => {
  const isInputNode = evt.target.classList.contains('effects__radio');
  const inputChecked = evt.target.hasAttribute('checked');

  if (isInputNode && !inputChecked) {
    const effect = evt.target.value;

    updateSlider(SLIDER_EFFECT_PARAMS[effect]);

    exchangeEffectClasses(evt.target.value);
    exchangeInputsAttr(evt.target);
  }
};

function toggleEffectsListeners () {
  const method = imgUpload.classList.contains('hidden') ? 'removeEventListener' : 'addEventListener';
  effectsList[method]('click', changeEffectHandler);
}

export {toggleEffectsListeners, resetEffects};
