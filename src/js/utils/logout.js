import axios from 'https://cdn.skypack.dev/axios?min';

document.addEventListener('DOMContentLoaded', () => {
    const buttonLogout = document.getElementById('log-out');
    if (!buttonLogout) return;
    buttonLogout.addEventListener('click', async () => {
        try {
            await axios.post('/api/logout', {}, { withCredentials: true });
            window.location.href = '/pages/login.html';
        } catch (error) {
            console.log(error);
        }
    });
});