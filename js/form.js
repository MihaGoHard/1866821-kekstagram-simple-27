const uploadFile = () => {
  const fileInput = document.querySelector('#upload-file');
  fileInput.addEventListener('change', (evt) => {
    console.log(evt);
  });
};

const openForm = () => {
  uploadFile();
};

export {openForm};
