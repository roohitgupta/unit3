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

document.querySelector('form').addEventListener('submit', loginComplete);
let savedData = JSON.parse(localStorage.getItem('userStack')) || [];



function loginComplete(e){
    e.preventDefault();


    let login_email = document.getElementById('login-email').value;
    let login_password = document.getElementById('login-password').value;


    let flag = false;

    for(let i=0; i<savedData.length; i++){
        console.log(savedData[i])
    
    if( login_email == savedData[i].email && login_password == savedData[i].password ){
        flag = true;
        alert('Welcome! your login successful');
        window.location.href = 'index.html';

    }
    
}
    if( flag == false){
    alert('Try again! Input incorrect.');
    }

}