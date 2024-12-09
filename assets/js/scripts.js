'use strict';

let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let modale = document.getElementById('modelener');
let btne = document.getElementById("myenter");
let spane = document.getElementsByClassName("eclose")[0];

btne.onclick = function() {
    modale.style.display = "block";
    modall.style.display = "none";
}
spane.onclick = function() {
    modale.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modale) {
        modale.style.display = "none";
    }
}


let modall = document.getElementById('modelelog');
let btnl = document.getElementById("myreg");
let spanl = document.getElementsByClassName("lclose")[0];

btnl.onclick = function() {
    modall.style.display = "block";
    modale.style.display = "none";
}
spanl.onclick = function() {
    modall.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modall) {
        modall.style.display = "none";
    }
}


let btncl = document.getElementById("myclose");

btncl.onclick = function() {
    modall.style.display = "none";
    modale.style.display = "block";
}


function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("menu__change");
    document.getElementById("nav").classList.toggle("menu__change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


let modalu = document.getElementById('myModalu');
let btnu = document.getElementById("myBtnu");
let spanu = document.getElementsByClassName("modalu__close")[0];

btnu.onclick = function() {
    modalu.style.display = "block"; 
}
spanu.onclick = function() {
    modalu.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalu) {
        modalu.style.display = "none";
    }
}


let slides = document.querySelectorAll('#slider__slides .slider__slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
slides[currentSlide].className = 'slider__slide';
currentSlide = (currentSlide+1)%slides.length;
slides[currentSlide].className = 'slider__slide showing';
}


let modalm = document.getElementById('myModals');
let btnm = document.getElementById("sliderMap");
let spanm = document.getElementsByClassName("modals__close")[0];

btnm.onclick = function() {
modalm.style.display = "block";
    
}
spanm.onclick = function() {
modalm.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalm) {
    modalm.style.display = "none";
    }
}


let modalex = document.getElementById('myModalex');
let btnex = document.getElementById("myBtnex");
let btnexcl = document.getElementById("myExp");
let spanex = document.getElementsByClassName("modalex__closex")[0];

btnex.onclick = function() {
    modalex.style.display = "block";   
}
btnexcl.onclick = function() {
    modalex.style.display = "none";
}
spanex.onclick = function() {
    modalex.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalex) {
        modalex.style.display = "none";
    }
}


let modala = document.getElementById('about');
let btna = document.getElementById("about-btn");
let spana = document.getElementsByClassName("about__closex")[0];

btna.onclick = function() {
    modala.style.display = "block";
}
spana.onclick = function() {
    modala.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modala) {
        modala.style.display = "none";
    }
}
