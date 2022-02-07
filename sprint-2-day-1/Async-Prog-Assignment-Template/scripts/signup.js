// =========navbar ====================
document.getElementById('home').onclick = function() {
    location.href = "index.html"
}

document.getElementById('login').onclick = function() {
    location.href = "login.html"
}

document.getElementById('signup').onclick = function() {
    location.href = "signup.html"
}
// =========navbar ====================

document.querySelector('form').addEventListener('submit', formSubmit);
let userStack = JSON.parse(localStorage.getItem('userStack')) || [];
function formSubmit(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userData = {
        name: name,
        number: number,
        email: email,
        password: password
    }

    userStack.push(userData);
    localStorage.setItem('userStack', JSON.stringify(userStack));

    alert('Thankyou for Sign up!');
    window.location.href = 'login.html';



}