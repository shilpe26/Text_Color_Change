const input = document.querySelector("#text");
const btnRed = document.querySelector("#btn-red");
const btnBlue = document.querySelector("#btn-blue");
const btnGreen = document.querySelector("#btn-green");

btnRed.addEventListener("click", redColor);
function redColor(){
    input.style.color = "red";
}

btnBlue.addEventListener("click", blueColor);
function blueColor(){
    input.style.color = "blue";
}

btnGreen.addEventListener("click", greenColor);
function greenColor(){
    input.style.color = "green";
}