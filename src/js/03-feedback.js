import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector('.feedback-form'), 
  email: document.querySelector('.feedback-form input'),
  message:document.querySelector('.feedback-form textarea')
};

const LOCALSTORAGE_KEY = "feedback-form-state";

refs.message.addEventListener('input',throttle(onFormInput,500));
refs.form.addEventListener('submit',onFormSubmit);

populateForm();

function onFormSubmit(e) {
    e.preventDefault();
    const savedInputs = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log(savedInputs);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    refs.form.reset();


}
function onFormInput(e) {
    const formElements = e.target.form.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    const formValue = { email, message };
    console.log(formValue);
    localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(formValue));
};

function populateForm() {
    const savedMessage =JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (savedMessage) {
        refs.email.value = savedMessage.email;
        refs.message.value = savedMessage.message;
     }
};

