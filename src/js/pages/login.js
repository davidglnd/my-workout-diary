//import axios 
import axios from 'https://cdn.skypack.dev/axios?min';
window.addEventListener('DOMContentLoaded', () => {
    const buttonLogin = document.getElementById('log-in');

    buttonLogin.addEventListener('click', formSubmit);
})

function formSubmit(event){
    event.preventDefault();
    const errorBox = document.querySelector('#error-msg');
    const form = document.querySelector('#form-login');
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);
    console.log(formDataObject);
    axios.post('/api/login', formDataObject)
        .then(response =>{
            console.log(response.data);
            window.location.href = '/pages/profile.html';
        })
        .catch(error =>{
            console.log("code:" + error.response.data.code);
            errorBox.textContent = error.response.data.message;
            errorBox.classList.add('active');
            setTimeout(() => {
                errorBox.classList.remove('active');
            }, 3000)
        });

}