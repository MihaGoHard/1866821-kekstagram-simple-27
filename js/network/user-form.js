import {sendData} from '../network/api.js';
import {toggleAlertElement} from '../alert.js';
import {ALERT_ERROR_CLASS, ALERT_SUCCESS_CLASS} from '../setup.js';

const userForm = document.querySelector('#upload-select-image');
const submitButton = document.querySelector('.img-upload__submit');
const pristine = new Pristine(userForm);


const toggleBlockSubmitButton = () => {
  submitButton.disabled = !submitButton.disabled;
};


const submitFormHandler = (onSuccess) => {
  const submitFormСlosured = (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(evt.target);

      toggleBlockSubmitButton();

      sendData(
        () => {
          onSuccess();
          toggleBlockSubmitButton();
          toggleAlertElement(ALERT_SUCCESS_CLASS);
        },
        () => {
          toggleBlockSubmitButton();
          toggleAlertElement(ALERT_ERROR_CLASS);
        },
        formData
      );
    } else {
      toggleAlertElement(ALERT_ERROR_CLASS);
    }
  };
  return submitFormСlosured;
};


const setUserFormSubmit = (onSuccess) => {

  userForm.addEventListener('submit', submitFormHandler(onSuccess));
};

export {setUserFormSubmit};
