export const logout = async (req, res) => {
    res.clearCookie('accessToken', { httpOnly: true, sameSite: 'none', secure: true }); 
    res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'none', secure: true });
    res.status(200).json({ message: "Logout successful" }); 
};
