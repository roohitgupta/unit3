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

/* ================Slide Show============= */




var x;
function slider(){


    let image_object = ['movie11.jpg', 'movie12.jpg', 'movie13.jpg'];

    localStorage.setItem('poster', JSON.stringify(image_object));

    let image = JSON.parse(localStorage.getItem('poster'));

    let crousal = document.getElementById('crousal');

    let i = 0;

    x = setInterval(() => {

        if(i === image.length){
            i = 0;
        }

        crousal.src = image[i];

        i = i + 1;
        console.log(i);
        
    }, 3000);


}
slider();


/* ================Slide Show end============= */