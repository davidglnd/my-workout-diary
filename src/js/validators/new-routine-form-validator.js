export function validateRoutineForm(formDetails){
    const numberDays = [];
    let error = '';
    if (formDetails.name === '' || formDetails.description === ''){
        return error = 'Por favor, complete todos los campos.';
    }else if (formDetails.workout_days > 7 || formDetails.workout_days < 2){
        return error = 'Por favor, seleccione un numero de dias de entrenamiento entre 2 y 7.';
    }else if (error === ''){
        numberDays.push(formDetails.workout_days);
        return numberDays;
    }
}