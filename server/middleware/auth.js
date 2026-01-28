import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const token = req.cookies.accessToken;
    console.log("auth:", token);

    if(!token) return res.status(401).json({ message: "No autorizado" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "No autorizado" });
    }
};