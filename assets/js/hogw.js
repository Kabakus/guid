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

var modals = document.getElementById('support');


var btns = document.getElementById("support-btn");


var spans = document.getElementsByClassName("support__closex")[0];



btns.onclick = function() {
    modals.style.display = "block";
    
}



spans.onclick = function() {
    modals.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modals) {
        modals.style.display = "none";
    }
}

function search_guids() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('place__grid-el');
  
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
  }
  

  var modalchg = document.getElementById('monte1');


var btnchg = document.getElementById("monte-1");


var spanchg = document.getElementsByClassName("monte1__closex")[0];



btnchg.onclick = function() {
    modalchg.style.display = "block";
    
}



spanchg.onclick = function() {
    modalchg.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg) {
        modalchg.style.display = "none";
    }
}

var modalchg = document.getElementById('monte2');


var btnchg = document.getElementById("monte-2");


var spanchg = document.getElementsByClassName("monte2__closex")[0];



btnchg.onclick = function() {
    modalchg.style.display = "block";
    
}



spanchg.onclick = function() {
    modalchg.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg) {
        modalchg.style.display = "none";
    }
}

var modalchg = document.getElementById('monte3');


var btnchg = document.getElementById("monte-3");


var spanchg = document.getElementsByClassName("monte3__closex")[0];



btnchg.onclick = function() {
    modalchg.style.display = "block";
    
}



spanchg.onclick = function() {
    modalchg.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg) {
        modalchg.style.display = "none";
    }
}

var modalchg = document.getElementById('monte4');


var btnchg = document.getElementById("monte-4");


var spanchg = document.getElementsByClassName("monte4__closex")[0];



btnchg.onclick = function() {
    modalchg.style.display = "block";
    
}



spanchg.onclick = function() {
    modalchg.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg) {
        modalchg.style.display = "none";
    }
}

var modalchg = document.getElementById('monte5');


var btnchg = document.getElementById("monte-5");


var spanchg = document.getElementsByClassName("monte5__closex")[0];



btnchg.onclick = function() {
    modalchg.style.display = "block";
    
}



spanchg.onclick = function() {
    modalchg.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg) {
        modalchg.style.display = "none";
    }
}


var modalchg = document.getElementById('monte6');


var btnchg = document.getElementById("monte-6");


var spanchg = document.getElementsByClassName("monte6__closex")[0];



btnchg.onclick = function() {
    modalchg.style.display = "block";
    
}



spanchg.onclick = function() {
    modalchg.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg) {
        modalchg.style.display = "none";
    }
}

var modalchg = document.getElementById('monte7');


var btnchg = document.getElementById("monte-7");


var spanchg = document.getElementsByClassName("monte7__closex")[0];




btnchg.onclick = function() {
    modalchg.style.display = "block";
    
}



spanchg.onclick = function() {
    modalchg.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg) {
        modalchg.style.display = "none";
    }
}