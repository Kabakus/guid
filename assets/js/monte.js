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




var modalchg1 = document.getElementById('monte1');


var btnchg1 = document.getElementById("monte-1");


var spanchg1 = document.getElementsByClassName("monte1__closex")[0];



btnchg1.onclick = function() {
    modalchg1.style.display = "block";
    
}



spanchg1.onclick = function() {
    modalchg1.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg1) {
        modalchg1.style.display = "none";
    }
}

var modalchg2 = document.getElementById('monte2');


var btnchg2 = document.getElementById("monte-2");


var spanchg2 = document.getElementsByClassName("monte2__closex")[0];



btnchg2.onclick = function() {
    modalchg2.style.display = "block";
    
}



spanchg2.onclick = function() {
    modalchg2.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg2) {
        modalchg2.style.display = "none";
    }
}

var modalchg3 = document.getElementById('monte3');


var btnchg3 = document.getElementById("monte-3");


var spanchg3 = document.getElementsByClassName("monte3__closex")[0];



btnchg3.onclick = function() {
    modalchg3.style.display = "block";
    
}



spanchg3.onclick = function() {
    modalchg3.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg3) {
        modalchg3.style.display = "none";
    }
}

var modalchg4 = document.getElementById('monte4');


var btnchg4 = document.getElementById("monte-4");


var spanchg4 = document.getElementsByClassName("monte4__closex")[0];



btnchg4.onclick = function() {
    modalchg4.style.display = "block";
    
}



spanchg4.onclick = function() {
    modalchg4.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg4) {
        modalchg4.style.display = "none";
    }
}

var modalchg5 = document.getElementById('monte5');


var btnchg5 = document.getElementById("monte-5");


var spanchg5 = document.getElementsByClassName("monte5__closex")[0];



btnchg5.onclick = function() {
    modalchg5.style.display = "block";
    
}



spanchg5.onclick = function() {
    modalchg5.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg5) {
        modalchg5.style.display = "none";
    }
}


var modalchg6 = document.getElementById('monte6');
var btnchg6 = document.getElementById("monte-6");
var spanchg6 = document.getElementsByClassName("monte6__closex")[0];



btnchg6.onclick = function() {
    modalchg6.style.display = "block";
    
}

spanchg6.onclick = function() {
    modalchg6.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalchg6) {
        modalchg6.style.display = "none";
    }
}

var modalchg7 = document.getElementById('monte7');
var btnchg7 = document.getElementById("monte-7");
var spanchg7 = document.getElementsByClassName("monte7__closex")[0];

btnchg7.onclick = function() {
    modalchg7.style.display = "block";
    
}



spanchg7.onclick = function() {
    modalchg7.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalchg7) {
        modalchg7.style.display = "none";
    }
}



const products = Array.from(document.querySelectorAll('.place__grid-el'));
const productsPerPage = 4; 
let currentPage = 1;

function renderProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    
    

    products.forEach(product => product.style.display = 'none');
    const currentProducts = products.slice(start, end);
    const necurrentProducts = products.slice(end, end*2);
    currentProducts.forEach(product => product.style.display = 'block');
}

function renderPagination() {
    const pageCount = Math.ceil(products.length / productsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.createElement('span');
        pageItem.className = 'page-item' + (i === currentPage ? ' active' : '');
        pageItem.textContent = i;
        pageItem.onclick = () => {
            currentPage = i;
            renderProducts(currentPage);
            renderPagination();
        };
        pagination.appendChild(pageItem);
    }
}

function search_guids() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('place__grid-el');
    let h = 0;
         
         
    for (h = 0; h < x.length; h++) {
        if (!x[h].innerHTML.toLowerCase().includes(input)) {
            x[h].style.display = "none";
        }
        else if (input == 0) {
            x[h].style.display = renderProducts(currentPage);
        }
        else if(x[h].innerHTML.toLowerCase().includes(input)) {
            x[h].style.display = products;
        }
    }
}

renderProducts(currentPage);
renderPagination();



