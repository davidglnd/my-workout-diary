import { validationResult } from "express-validator";

import User from "../models/User.js";

export  const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {name, last_name, username, birth, email, password} = req.body;

    const userExists = await User.findOne({username});
    const emailExists = await User.findOne({email});
    if (userExists) {
        return res.status(400).json({ message: "El usario ya existe" });
    }else if (emailExists) {
        return res.status(400).json({ message: "El correo ya esta registrado" });
    }
    const newUser = await User.create({
        name,
        last_name,
        username,
        birth,
        email,
        password
    })
    res.status(201).json({message: "Usuario creado correctamente", user: newUser});
}