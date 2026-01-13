export function signUpFormValidator(formDataObject){
    let error = {
        boolean : false,
        text :'',
        code : '',
    }

    if(formDataObject.username === '' || formDataObject.email === '' || formDataObject.password === '' ||
    formDataObject.name === '' || formDataObject.last_name === '' || formDataObject.birth === '')
    {
        error.boolean = true;
        error.text = 'Por favor, complete todos los campos.';
        error.code = 'empty_fields';
        return error;
    }
}