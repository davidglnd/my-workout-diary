import axios from 'https://cdn.skypack.dev/axios?min';

axios.get('/api/profile', { withCredentials: true })
  .then(res => {
    document.querySelector('#username').textContent = res.data.user.name.charAt(0).toUpperCase() + res.data.user.name.slice(1);
  })
  .catch(() => { window.location.href = '/pages/login.html';});