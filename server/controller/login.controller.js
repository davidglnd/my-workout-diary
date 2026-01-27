import { validationResult } from "express-validator";

import User from "../models/User.js";

export const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: "El usuario no existe" });
    }
    if (user.password !== password) {
        return res.status(400).json({ message: "La contraseña es incorrecta" });
    }
    res.status(200).json({ message: "Login correcto", user });
}