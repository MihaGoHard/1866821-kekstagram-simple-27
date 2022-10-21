import {isEscapeKey} from './util.js';
import {ALERT_ERROR_CLASS, ALERT_SUCCESS_CLASS, ALERT_SHOW_TIME} from './setup.js';

const getResultClass = (elemClassList) => {
  const isSuccessButton = elemClassList.contains(`${ALERT_SUCCESS_CLASS}__button`);
  const isSuccessOverlay = elemClassList.contains(ALERT_SUCCESS_CLASS);
  const isErrorButton = elemClassList.contains(`${ALERT_ERROR_CLASS}__button`);
  const isErrorOverlay = elemClassList.contains(ALERT_ERROR_CLASS);

  const isSuccess = isSuccessButton || isSuccessOverlay;
  const isError = isErrorButton || isErrorOverlay;


  if (!isSuccess && !isError) {
    return NaN;
  }

  return (isSuccess) ? ALERT_SUCCESS_CLASS : ALERT_ERROR_CLASS;
};

const closeAlertKeydownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    const alertNode = document.querySelector(`.${ALERT_SUCCESS_CLASS}`) || document.querySelector(`.${ALERT_ERROR_CLASS}`);
    const classList = alertNode.classList;
    const resultClass = getResultClass(classList);

    evt.preventDefault();
    toggleAlertElement(resultClass);
  }
};


const closeAlertHandler = (evt) => {
  const classList = evt.target.classList;
  const resultClass = getResultClass(classList);

  if (resultClass) {
    toggleAlertElement(resultClass);
  }
};

function toggleAlertListeners(resultClass) {
  const alertButton = document.querySelector(`.${resultClass}__button`);

  if (alertButton) {
    const alertOverlay = document.querySelector(`.${resultClass}`);
    alertOverlay.addEventListener('click', closeAlertHandler);
  }

  const method = alertButton ? 'addEventListener' : 'removeEventListener';
  document[method]('keydown', closeAlertKeydownHandler);
}

function toggleAlertElement(resultClass) {

  const alertElem = document.body.querySelector(`.${resultClass}`);

  if (!alertElem) {
    const alertTemplate = document.querySelector(`#${resultClass}`).content.querySelector(`.${resultClass}`);
    const alert = alertTemplate.cloneNode(true);
    document.body.append(alert);
  } else {
    alertElem.remove();
  }

  toggleAlertListeners(resultClass);

}


const showServerAlert = (message) => {
  const alertContainer = document.createElement('div');

  alertContainer.classList = 'server-alert';
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {toggleAlertElement, showServerAlert};
