const validateSentForm = (userForm) => {
  const pristine = new Pristine(userForm);

  userForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if (!isValid) {
      evt.preventDefault();
      alert("Комментарий неверен");
    }
  });
};

export {validateSentForm};
