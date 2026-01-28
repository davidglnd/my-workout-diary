import User from "../models/User.js";
export const profileController = async (req, res) => {
    const user = await User.findById(req.user).select('name');
    res.status(200).json({user});
}