import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('[name="email"]');
const messageInputRef = document.querySelector('[name="message"]');

let userInputData = {};
localStorageCheker();

formRef.addEventListener(
  'input',
  throttle(({ target }) => {
    userInputData[target.type] = target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(userInputData));
  }, 500)
);

function localStorageCheker() {
  const currentData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (currentData) {
    emailInputRef.value = currentData.email
      ? (userInputData.email = currentData.email)
      : '';
    messageInputRef.value = currentData.textarea
      ? (userInputData.textarea = currentData.textarea)
      : '';
  }
}

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  console.log(userInputData);

  e.currentTarget.reset();
  localStorage.clear();
}
