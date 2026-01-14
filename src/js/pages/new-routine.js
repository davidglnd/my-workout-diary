//imports validateFunctions 
import { validateRoutineDetailsForm, validateRoutineDaysForm } from '../validators/new-routine-form-validator.js';

window.addEventListener('DOMContentLoaded', () => {
    const buttonNextStep = document.getElementById('next-step');
    const buttonSecondStep = document.getElementById('second-step');

    buttonNextStep.addEventListener('click', clickedNextStep);
    buttonSecondStep.addEventListener('click', clickedSecondStep);
})

function clickedNextStep() {
    const formDetails = document.querySelector('#routine-details');
    const formDetailsInputs = new FormData(formDetails);
    const formDetailsObject = Object.fromEntries(formDetailsInputs);

    formDetailsObject.workout_days = Number(formDetailsObject.workout_days);

    let validateformDetails = validateRoutineDetailsForm(formDetailsObject);

    if(typeof validateformDetails === 'string'){
        const error = document.querySelector('#error-msg');
        error.textContent = validateformDetails;
        error.classList.add('active');
        setTimeout(() => {
            error.classList.remove('active');
        }, 3000)

    }else{
        showFormDays();
        clearLocalStorage();
        saveToLocalStorage(validateformDetails);
    }
}

function showFormDays(){
    const formDays = document.querySelector('#routine-days');
    const formDetails = document.querySelector('#routine-details');

    formDetails.classList.remove('active');
    formDays.classList.add('active');
};

function clickedSecondStep(){
    const routineDetails = JSON.parse(localStorage.getItem('routine'));
        
    const checkedDays = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    let validateformDays = validateRoutineDaysForm(checkedDays, routineDetails[2]);

    if(typeof validateformDaysObject === 'string'){
        const error = document.querySelector('#error-days');
        error.textContent = validateformDays;
        error.classList.add('active');
        setTimeout(() => {
            error.classList.remove('active');
        }, 3000)
    }else{
        //Aqui ya tendriamos que pushear los dias a la base de datos
        console.log(routineDetails, validateformDays);
        // son dos arrays
    }
    
}

function saveToLocalStorage(validateformDetailsObject){
    localStorage.setItem('routine', JSON.stringify(validateformDetailsObject));
}

function clearLocalStorage(){
    localStorage.removeItem('routine');
}