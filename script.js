
document.getElementById('password_reset_form')
.addEventListener('submit', e => {
    e.preventDefault();
    
    if(verifyPassword()) {
        showCard();
    }
})
document.querySelectorAll('.reset-form__label ~ input')
.forEach(htmlInput => {
    htmlInput.addEventListener('change', hideError)
})

function showCard() {
    const form = document.getElementById('password_reset_form');
    const card = document.getElementById('card');
    form.classList.add('hidden');
    card.classList.remove('hidden');
}

function verifyPassword() {
    const password = document.getElementById('password').value;
    const password_repeat = document.getElementById('password_repeat').value;

    if(password !== password_repeat) {
        showError('Password do not match');
        return false;
    } else if(password.length < 8) {
        showError('Password must be atleat 8 characters long')
        return false;
    } else if(/^[A-Z|a-z]+$/.test(password)) {
        showError('Password must be alpha-numeric');
        return false;
    }
    return true;
}

function showError(err) {
    const password_repeat = document.getElementById('password_repeat');
    const invalid_status = document.getElementById('invalid_status');
    invalid_status.textContent = err;
    invalid_status.classList.remove('invisible');
    password_repeat.classList.add('invalid_password');

}

function hideError() {
    const password_repeat = document.getElementById('password_repeat');
    const invalid_status = document.getElementById('invalid_status');
    invalid_status.textContent = '';
    invalid_status.classList.add('invisible');
    password_repeat.classList.remove('invalid_password');
}