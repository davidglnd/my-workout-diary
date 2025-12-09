window.addEventListener('DOMContentLoaded', () => {
    const buttonNextStep = document.getElementById('next-step');

    buttonNextStep.addEventListener('click', clickedButton)
})

function clickedButton() {
    const form = document.getElementById('routine-details');
    const form2 = document.getElementById('routine-extras');
    form.classList.remove('active');
    form2.classList.add('active');
}