import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),

}

// const userData = {};

const STORAGE_KEY = 'feedback-form-state';
populateTextarea();

// console.log(refs.textarea);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextAreaInput, 500));
// console.log(refs.form.email);
// console.log(refs.form.message.value);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));

function onTextAreaInput(evt) {
    let userData = localStorage.getItem(STORAGE_KEY);
    userData = userData ? JSON.parse(userData) : {};
    userData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(refs.form);
    // formData.forEach((name, value) => console.log(name, value));
    console.log('Form send:', JSON.parse(localStorage.getItem(STORAGE_KEY)));

    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    let userData = localStorage.getItem(STORAGE_KEY);
    if (userData) {
        userData = JSON.parse(userData);
      Object.entries(userData).forEach(([name, value]) => {
        refs.form.elements[name].value = value;
      });
    }
}

// import throttle from "lodash.throttle";
// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),

// }
// const userData = {
//     'email' : '',
//     'message' : ''
// }
// const STORAGE_KEY = 'feedback-form-state';
// populateTextarea();

// // console.log(refs.textarea);

// refs.form.addEventListener('submit', onFormSubmit);

// refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));

// function onTextAreaInput(evt) {
//     const message = evt.target.value;

//     localStorage.setItem(STORAGE_KEY, message);
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();

//     console.log('Sending form');

//     evt.target.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }

// function populateTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);

//     if (savedMessage) {
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     }
// }