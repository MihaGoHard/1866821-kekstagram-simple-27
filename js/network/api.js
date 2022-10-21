import {SEND_DATA_ADDRESS, GET_DATA_ADDRESS, SERVER_ERROR_MSG} from '../setup.js';

const getData = (onSuccess, onFail) => {
  fetch(GET_DATA_ADDRESS)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onFail((SERVER_ERROR_MSG));
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_ADDRESS,
    {
      method: 'POST',
      body
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onFail();
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
