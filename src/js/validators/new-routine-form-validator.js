export function validateRoutineForm(formDetails){
    const numberDays = [];
    let error = '';
    if (formDetails.name === '' || formDetails.description === ''){
        return error = 'Por favor, complete todos los campos.';
    }else if (formDetails.workout_days > 7 || formDetails.workout_days < 2){
        return error = 'Por favor, seleccione un numero de dias de entrenamiento entre 2 y 7.';
    }else if (formDetails.rest_days > 5 || formDetails.rest_days < 0){
        return error = 'Por favor, seleccione un numero de dias de descanso entre 0 y 5.';
    }else if (formDetails.workout_days + formDetails.rest_days > 7){
        return error = 'Por favor, seleccione un numero de dias de entrenamiento y descanso que sumen 7 o menos.';
    }else if (error === ''){
        numberDays.push(formDetails.workout_days);
        numberDays.push(formDetails.rest_days);
        return numberDays;
    }
}