// Img Changer
let img = document.querySelector('.bg');
let view_car = document.querySelector('.view_car');
function cars(car) {
    img.src = car ;
}
function colors (color) {
    view_car.style.background = color ;
}
//--Type Writer--//
let myText ="Welcome To Avalon Motors";
i =0;
'use strict';
let typeWriter= setInterval (function (){
    document.getElementById ('type' ).textContent +=myText[i];
    i+= 1;
    if(i > myText.length - 1 ){
        clearInterval (typeWriter)
    }
} , 150);