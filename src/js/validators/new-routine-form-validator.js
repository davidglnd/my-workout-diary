export function validateRoutineDetailsForm(formDetails){
    const arrayRoutineDetails = [];
    let error = '';
    if (formDetails.name === '' || formDetails.description === ''){
        return error = 'Por favor, complete todos los campos.';
    }else if (formDetails.workout_days > 7 || formDetails.workout_days < 2){
        return error = 'Por favor, seleccione un numero de dias de entrenamiento entre 2 y 7.';
    }else if (error === ''){
        arrayRoutineDetails.push(formDetails.name);
        arrayRoutineDetails.push(formDetails.description);
        arrayRoutineDetails.push(formDetails.workout_days);
        return arrayRoutineDetails;
    }
}

export function validateRoutineDaysForm(checkedDays, workoutDays){
    const arrayRoutineDays = [];
    let error = '';
    if (checkedDays.length < workoutDays || checkedDays.length > workoutDays){
        return error = 'Por favor, seleccione ' + workoutDays + ' dias de entrenamiento.';
    }else if (error === ''){
        arrayRoutineDays.push(checkedDays);
        return arrayRoutineDays;
    }
}