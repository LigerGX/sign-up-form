const formSubmit = (e) => {
  e.preventDefault();

  clearForm();
  alert('Sign-Up successful!');
};

const clearForm = (e) => {
  const formInputs = document.querySelectorAll('input');

  formInputs.forEach((input) => {
    input.value = '';
  });
};

const submitButton = document.querySelector('.form-submit');
submitButton.addEventListener('click', formSubmit);
