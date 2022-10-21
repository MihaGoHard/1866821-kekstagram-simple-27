const PHOTOS_NUM = 25;

const MAX_SCALE_VALUE = 100;
const SCALE_STEP = 25;
const MIN_SCALE_VALUE = SCALE_STEP;
const POINT_INDEX = 100;

const SEND_DATA_ADDRESS = 'https://27.javascript.pages.academy/kekstagram-simple';

const ALERT_SUCCESS_CLASS = 'success';
const ALERT_ERROR_CLASS = 'error';

const SLIDER_EFFECT_PARAMS = {
  'none': {
    filter: 'none',
    min: 0,
    max: 1,
    step: 0.1,
    um: ''
  },
  'chrome': {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    um: ''
  },
  'sepia': {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    um: ''
  },
  'marvin': {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    um: '%'
  },
  'phobos': {
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    um: 'px'
  },
  'heat': {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    um: ''
  },
};

export {
  PHOTOS_NUM,
  MAX_SCALE_VALUE,
  MIN_SCALE_VALUE,
  SCALE_STEP,
  POINT_INDEX,
  SLIDER_EFFECT_PARAMS,
  SEND_DATA_ADDRESS,
  ALERT_ERROR_CLASS,
  ALERT_SUCCESS_CLASS
};
