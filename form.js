const formSubmit = (e) => {
  e.preventDefault();

  clearForm();
  toggleHide();
};

const clearForm = () => {
  const formInputs = document.querySelectorAll('input');

  formInputs.forEach((input) => {
    input.value = '';
  });
};

const toggleHide = () => {
  const hide = document.querySelector('.hide_container'); // hidden divs will have this class
  hide.classList.toggle('hide'); // this is the class that will toggle display: none
};

const submitButton = document.querySelector('.form-submit');
submitButton.addEventListener('click', formSubmit);

const okayButton = document.querySelector('.success-ok');
okayButton.addEventListener('click', toggleHide);
