import { signUpFormValidator } from '../validators/signup-form-validator.js';

window.addEventListener('DOMContentLoaded', () => {
    const buttonSignUp = document.getElementById('sign-up');

    buttonSignUp.addEventListener('click', formSubmit);
})

function formSubmit(event) {
    event.preventDefault();
    const form = document.querySelector('#form-sign-up');
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);
    console.log(formDataObject);
    let validateform = signUpFormValidator(formDataObject);

    console.log(validateform.boolean, validateform.text, validateform.code);
    
}