import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),

}
const userData = {
    'email' : '',
    'message' : ''
}
const STORAGE_KEY = 'feedback-form-state';
populateTextarea();

// console.log(refs.textarea);

refs.form.addEventListener('submit', onFormSubmit);

refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));

function onTextAreaInput(evt) {
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
}

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Sending form');

    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}