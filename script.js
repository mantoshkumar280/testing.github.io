const text = "Welcome to my portfolio!";
let index = 0;

function typeWriter() {
    if(index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

function sayHi() {
    alert("Hi! Thanks for visiting my page.");
}
