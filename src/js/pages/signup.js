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
    const errorBox = document.querySelector('#error-msg');
    
    let validateform = signUpFormValidator(formDataObject);

    console.log(validateform.boolean, validateform.text, validateform.code);

    if(validateform.boolean === true){
        errorBox.textContent = validateform.text;
        errorBox.classList.add('active');
        setTimeout(() => {
            errorBox.classList.remove('active');
        }, 3000)
    }else if(validateform.boolean === false){
        console.log(formDataObject);
        axios.post('/api/signup', formDataObject)
            .catch(error =>{
                errorBox.textContent = error.response.data.message;
                errorBox.classList.add('active');
                setTimeout(() => {
                    errorBox.classList.remove('active');
                }, 3000)
            });
    }
    
}