//imports validators
import { signUpFormValidator } from '../validators/signup-form-validator.js';

//imports utils
import axios from 'https://cdn.skypack.dev/axios?min';

window.addEventListener('DOMContentLoaded', () => {
    const buttonSignUp = document.getElementById('sign-up');

    buttonSignUp.addEventListener('click', formSubmit);
})

function formSubmit(event) {
    event.preventDefault();
    const form = document.querySelector('#form-sign-up');
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);
    
    let validateform = signUpFormValidator(formDataObject);

    console.log(validateform.boolean, validateform.text, validateform.code);

    if(validateform.boolean === true){
        const error = document.querySelector('#error-msg');
        error.textContent = validateform.text;
        error.classList.add('active');
        setTimeout(() => {
            error.classList.remove('active');
        }, 3000)
    }else if(validateform.boolean === false){
        console.log(formDataObject);
        axios.post('/api/signup', formDataObject)
        
    }
    
}