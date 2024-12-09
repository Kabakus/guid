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


const products = Array.from(document.querySelectorAll('.place__grid-el'));
const productsPerPage = 4; 
let currentPage = 1;

function renderProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    
    

    products.forEach(product => product.style.display = 'none');
    const currentProducts = products.slice(start, end);
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
            pagination.style.display = 'block'
        }
        else if(x[h].innerHTML.toLowerCase().includes(input)) {
            x[h].style.display = "block";
            pagination.style.display = 'none'
        }
    }
}

renderProducts(currentPage);
renderPagination();



let ascending = true; 


document.getElementById('sortButton').addEventListener('click', function() {
    const grid = document.getElementById('grid_places');
    const items = Array.from(grid.getElementsByClassName('place__grid-el'));
    let SetName = document.getElementById('sortButton')

    items.sort((a, b) => {
        const nameA = a.getAttribute('data-name');
        const nameB = b.getAttribute('data-name');
        return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        
    });

    


    grid.innerHTML = '';
    items.forEach(item => grid.appendChild(item));

    
    if (ascending == false){
        SetName.innerText = 'Сортировать по возрастанию' ;
    }
    else{
        SetName.innerText = 'Сортировать по убыванию'
    }
    
    ascending = !ascending;

});

const toggleFilterButton = document.getElementById('show-filters');
const filterButtonsContainer = document.getElementById('filterButtons');
const filterButtons = document.querySelectorAll('.place__filter-button');
const gridItems = document.querySelectorAll('.place__grid-el');


toggleFilterButton.addEventListener('click', function() {
    const isVisible = filterButtonsContainer.style.display === 'block';
    filterButtonsContainer.style.display = isVisible ? 'none' : 'block';
    toggleFilterButton.textContent = isVisible ? 'Показать фильтры' : 'Скрыть фильтры';
});


filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');

        gridItems.forEach(item => {
            if (item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


const apiUrl = 'https://673add6e339a4ce44519711d.mockapi.io/vrar/test'; 


async function getMonte(monteId) {
    const response = await fetch(`${apiUrl}/${monteId}`);
    const data = await response.json();
    return data;
}


document.getElementById('hill-1').addEventListener('click', async () => {
    const monteId = 19; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('hill-2').addEventListener('click', async () => {
    const monteId = 20; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('hill-3').addEventListener('click', async () => {
    const monteId = 21; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('hill-4').addEventListener('click', async () => {
    const monteId = 22; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});
document.getElementById('hill-5').addEventListener('click', async () => {
    const monteId = 23; 
    const monte = await getMonte(monteId);
    openMontePage(monte);
});






function openMontePage(monte) {
    const monteInfo = `
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Loader Example</title>
          <style>
              .loader {
                  position: sticky;
                  width: 150px;
                  height: 150px;
                  left: 45%;
                  top: 20%;
                  

                  .spinner {
                      width: 100%;
                      height: 100%;
                      border: 30px solid transparent;
                      border-top: 30px solid black;
                      border-radius: 50%;
                      animation: spin 1s linear infinite, changeColor 1s linear infinite;
                  }
              }

              @keyframes spin {
                  0% {
                      transform: rotate(0deg);
                  }
                  100% {
                      transform: rotate(360deg);
                  }
              }
                  
              @keyframes changeColor {
                  0% {
                      border-top-color: #3498db;
                  }
                  25% {
                      border-top-color: #e74c3c;
                  }
                  50% {
                      border-top-color: #f1c40f;
                  }
                  75% {
                      border-top-color: #2ecc71;
                  }
                  100% {
                      border-top-color: #3498db;
                  }
              }

              .content {
                  display: none;
                  text-align: center;
              }
          </style>
      </head>
      <body style='background: url("https://github.com/Kabakus/kartinki/blob/main/BG.png?raw=true"); background-attachment: fixed; margin: 0px'>
      <div class='body' style='height: 200vh; background: linear-gradient(180deg, rgba(252,208,0,0.8) 0%, rgba(244,101,254,0.8) 5%, rgba(0,149,255,0.8) 73%, rgba(0,153,41,0.8044467787114846) 96%);'>
          <div class="loader" id="loader">
              <div class="spinner"></div>
          </div>
          <div class="content" id="content">
              <h2 style="color: #F5F5DC; font-weight: 800; font-size: 64px; text-align: center; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);">${monte.title}</h2>
              ${monte.img}
              <p style="color: #74FF9E; font-weight: 600; font-size: 30px; text-align: center; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);">${monte.text}</p>
          </div>
          <script>
              window.onload = function() {
                  const loader = document.getElementById('loader');
                  const content = document.getElementById('content');

                  setTimeout(() => {
                      loader.style.display = 'none';
                      content.style.display = 'block';
                  }, 5000);
              };
          </script>
      </div>
      </body>
        
    `;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(monteInfo);
    newWindow.document.close();
}