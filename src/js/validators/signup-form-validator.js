export function signUpFormValidator(formDataObject){
    let error = {
        boolean : false,
        text :'',
        code : '',
    }

    const regexUsername = /^[a-z0-9_]{3,8}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const regexPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    if(formDataObject.username === '' || formDataObject.email === '' || formDataObject.password === '' ||
    formDataObject.name === '' || formDataObject.last_name === '' || formDataObject.birth === '')
    {
        error.boolean = true;
        error.text = 'Por favor, complete todos los campos.';
        error.code = 'empty_fields';
        return error;
    }else if(formDataObject.username.length < 3 || formDataObject.username.length > 8){
        error.boolean = true;
        error.text = 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
        error.code = 'invalid_username';
        return error;
    }else if(!regexUsername.test(formDataObject.username)){
        error.boolean = true;
        error.text = 'El nombre de usuario solo puede contener letras y numeros.';
        error.code = 'invalid_username';
        return error;
    }else if (!regexEmail.test(formDataObject.email)){
        error.boolean = true;
        error.text = 'Por favor, ingrese un correo valido.';
        error.code = 'invalid_email';
        return error;
    }else if(formDataObject.password !== formDataObject.password_confirmation){
        console.log(formDataObject.password, formDataObject.password_confirmation);
        error.boolean = true;
        error.text = 'Las contrasenas no coinciden.';
        error.code = 'passwords_dont_match';
        return error;
    }else if(formDataObject.password.length < 8){
        error.boolean = true;
        error.text = 'La contrasena debe tener al menos 8 caracteres.';
        error.code = 'password_too_short';
        return error;
    }else if(formDataObject.password.length > 16){
        error.boolean = true;
        error.text = 'La contrasena debe tener menos de 16 caracteres.';
        error.code = 'password_too_long';
        return error;
    }else if(!regexPassword.test(formDataObject.password)){
        error.boolean = true;
        error.text = 'La contrasena debe contener al menos una letra mayuscula, una minuscula y un numero.';
        error.code = 'password_too_weak';
        return error;
    }else{
        error.boolean = false;
        error.text = '';
        error.code = '';
        return error;
    }
}