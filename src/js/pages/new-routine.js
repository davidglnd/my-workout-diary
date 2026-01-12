
import { validateRoutineForm } from '../validators/new-routine-form-validator.js';

window.addEventListener('DOMContentLoaded', () => {
    const buttonNextStep = document.getElementById('next-step');

    buttonNextStep.addEventListener('click', clickedButton);
})

function clickedButton() {
    const formDetails = document.querySelector('#routine-details');
    const formDetailsInputs = new FormData(formDetails);
    const formDetailsObject = Object.fromEntries(formDetailsInputs);

    formDetailsObject.workout_days = Number(formDetailsObject.workout_days);

    let validateformDetailsObject = validateRoutineForm(formDetailsObject);

    if(typeof validateformDetailsObject === 'string'){
        const error = document.querySelector('#error-msg');
        error.textContent = validateformDetailsObject;
        error.classList.add('active');
        setTimeout(() => {
            error.classList.remove('active');
        }, 3000)

    }else{
        nextStep(formDetailsObject);
    }
}

function nextStep(formDetailsObject){
    console.log(formDetailsObject);
    const formDays = document.querySelector('#routine-days');
    const formDetails = document.querySelector('#routine-details');

    formDetails.classList.remove('active');
    formDays.classList.add('active');

    
};