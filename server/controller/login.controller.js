import { validationResult } from "express-validator";

import jwt from "jsonwebtoken";

import User from "../models/User.js";

export const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "El usuario no existe" });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "La contraseña es incorrecta" });
        }
        const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('accessToken', accessToken, { httpOnly: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true });

        console.log("Login:", {
            message: "Succesful login",
            user: { id: user.id, username: user.username },
        });

        res.status(200).json({
            message: "Login correcto",
            user: { id: user.id, username: user.username },
        });
    }catch(error){
        console.log(error);
    }
}