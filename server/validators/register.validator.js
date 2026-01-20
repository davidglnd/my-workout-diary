import {body} from "express-validator";

export const registerValidator = [
    body("email")
        .isEmail()
        .withMessage("El correo no es valido"),
    body("username")
        .matches(/^[a-z0-9_]{3,8}$/)
        .withMessage("El nombre de usuario debe tener entre 3 y 8 caracteres y solo puede contener letras y numeros"),
    body("password")
        .isLength({min: 8})
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
        .withMessage("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número"),
    body("password_confirmation")
        .custom((value, {req}) => value === req.body.password)
        .withMessage("Las contraseñas no coinciden"),
    body("birth")
        .isISO8601()
        .toDate()
        .custom(date => {
            if (date > new Date()) {
            throw new Error("La fecha no puede ser futura");
            }
            return true;
        })
        .withMessage("La fecha debe ser anterior a la fecha actual"),
    body("name")
        .trim()
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({ min: 2, max: 30 })
        .withMessage("Nombre muy corto o muy largo")
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
        .withMessage("El nombre solo puede contener letras y espacios"),
    body("last_name")
        .trim()
        .notEmpty()
        .withMessage("El apellido es obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage("Apellido muy corto o muy largo")
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
        .withMessage("El apellido solo puede contener letras"),
]