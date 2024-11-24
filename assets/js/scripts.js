'use strict';

var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");



var span = document.getElementsByClassName("modal__close")[0];



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



var attention = document.getElementById('attention')

attention.onclick = function(event){
    alert('Написано же недоступно')
}



var modale = document.getElementById('modelener');


var btne = document.getElementById("myenter");


var spane = document.getElementsByClassName("eclose")[0];



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




var modall = document.getElementById('modelelog');


var btnl = document.getElementById("myreg");



var spanl = document.getElementsByClassName("lclose")[0];


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


var btncl = document.getElementById("myclose");

btncl.onclick = function() {
    modall.style.display = "none";
    modale.style.display = "block";
}



function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("menu__change");
    document.getElementById("nav").classList.toggle("menu__change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


var modalu = document.getElementById('myModalu');


var btnu = document.getElementById("myBtnu");



var spanu = document.getElementsByClassName("modalu__close")[0];



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



var slides = document.querySelectorAll('#slider__slides .slider__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
slides[currentSlide].className = 'slider__slide';
currentSlide = (currentSlide+1)%slides.length;
slides[currentSlide].className = 'slider__slide showing';
}

var modalm = document.getElementById('myModals');


var btnm = document.getElementById("sliderMap");



var spanm = document.getElementsByClassName("modals__close")[0];



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






var modalex = document.getElementById('myModalex');


var btnex = document.getElementById("myBtnex");

var btnexcl = document.getElementById("myExp");

var spanex = document.getElementsByClassName("modalex__closex")[0];



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

var modala = document.getElementById('about');


var btna = document.getElementById("about-btn");


var spana = document.getElementsByClassName("about__closex")[0];



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
