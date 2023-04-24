import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
checkSave();
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let formInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

function onSubmit(event) {
  event.preventDefault();
  if (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) !== null) {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  }
  formInput = {};
  event.currentTarget.reset();
  localStorage.clear();
}

function onInput(event) {
  // event.preventDefault();
  formInput[event.target.name] = event.target.value;
  // formInput[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formInput));
}

function checkSave() {
  const savedSettings = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedSettings) {
    const { email, message } = savedSettings;

    form.email.value = email || ' ';
    form.message.value = message || ' ';
    // console.log(savedSettings);
  }
}
