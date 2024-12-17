'use strict';

class ModalWindow {
    constructor(modalId, buttonId, closeClass) {
        this.modal = document.getElementById(modalId);
        this.btn = document.getElementById(buttonId);
        this.closeButton = document.getElementsByClassName(closeClass)[0];
        this.func();
    }
    func() {
        this.btn.onclick = () => this.open();
        this.closeButton.onclick = () => this.close();
        window.onclick = (event) => this.windowclose(event);
    }
    open() {
        this.modal.style.display = "block";
    }
    close() {
        this.modal.style.display = "none";
    }
    windowclose(event) {
        if (event.target === this.modal) {
            this.close();
        }
    }
}

const myModal = new ModalWindow('myModal', 'myBtn', 'modal__close');
const myModalMenu = new ModalWindow('myModalu', 'myBtnu', 'modalu__close');
const myModalAbout = new ModalWindow('about', 'about-btn', 'about__closex');


class Menu{
    constructor(){
        this.bar = document.getElementById("menu-bar");
        this.nav = document.getElementById("nav");
        this.bg = document.getElementById("menu-bg");
    };
    menuOnClick() {
        this.bar.classList.toggle("menu__change");
        this.nav.classList.toggle("menu__change");
        this.bg.classList.toggle("change-bg");
    }
}
let menuopen = new Menu
menuopen.menuOnClick


class ApiService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }


    async fetchData(page = 1, limit = 4, sortBy = '', order = 'asc', filters = {}, search = '') {

        const queryParams = new URLSearchParams({
            page,
            limit,
            sortBy,
            order,
            ...filters,  
            search,  
        }).toString();

        const response = await fetch(`${this.apiUrl}?${queryParams}`);
        return await response.json();
    }
}

class App {
    
    constructor(apiService) { 
        this.apiService = apiService;
        this.appElement = document.getElementById('app');
        this.currentPage = 1;
        this.totalItems = 0; 
        this.limit = 4; 
        this.sortBy = 'id'; 
        this.order = 'asc'; 
        this.filters = {}; 
        this.searchQuery = ''; 
        this.paginItems = 0;
    }


    async homePage() {
        const data = await this.apiService.fetchData(this.currentPage, this.limit, this.sortBy, this.order, this.filters, this.searchQuery);
        
        if (!data || !Array.isArray(data) || data.length === 0) {
            this.appElement.innerHTML = '<h1>Данные не найдены</h1>';
            return;
        }

        
        const totalData = await this.apiService.fetchData(1, 30, this.sortBy, this.order, this.filters, this.searchQuery); 

        this.paginItems = totalData.length; 
        this.totalItems = data.length; 

        this.appElement.innerHTML = `
            <h1>Список данных</h1>
            <label for="sort">Сортировать по:</label>
            <select id="sort" onchange="app.changeSort()">
                <option value="id" ${this.sortBy == 'id' ? 'selected' : ''}>ID</option>
                <option value="title" ${this.sortBy == 'title' ? 'selected' : ''}>Заголовок</option>
            </select>
            <label for="district">Фильтр по популярности:</label>
            <select id="district" onchange="app.changeFilter()">
                <option value="">Все</option>
                <option value="district1" ${this.filters.district == 'district1' ? 'selected' : ''}>Популярные</option>
                <option value="district2" ${this.filters.district == 'district2' ? 'selected' : ''}>Непопулярные</option>
            </select>
            <label for="search">Поиск по названию:</label>
            <input type="text" id="search" placeholder="Введите название" oninput="app.changeSearch()" value="${this.searchQuery}">
            <div id="data-list">
                ${data.map(item => `
                    <div class="item" data-item='${JSON.stringify(item)}' onclick="app.viewDetails(this)">
                        <p>${item.img}</p>
                        <h2>${item.title}</h2>
                    </div>
                `).join('')}
            </div>
        `;
        this.renderPagination();
    }


    async changeSearch() {
        const searchInput = document.getElementById('search');
        this.searchQuery = searchInput.value; 
        this.currentPage = 1; 
        await this.homePage(); 
    }


    async changeSort() {
        const select = document.getElementById('sort');
        this.sortBy = select.value;
        this.currentPage = 1; 
        await this.homePage();
    }

 
    async changeFilter() {
        const select = document.getElementById('district');
        const district = select.value; 

        this.filters.district = district; 

        this.currentPage = 1; 
        await this.homePage();
    }


    renderPagination() {
        const pagination = document.createElement('div');
        pagination.className = 'pagination';

        const totalPages = Math.ceil(this.paginItems / this.limit);

    
        if (this.currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.innerText = 'Предыдущая';
            prevButton.onclick = () => this.changePage(this.currentPage - 1);
            pagination.appendChild(prevButton);
        }


        if (this.currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.innerText = 'Следующая';
            nextButton.onclick = () => this.changePage(this.currentPage + 1);
            pagination.appendChild(nextButton);
        }

        this.appElement.appendChild(pagination);
    }


    async changePage(page) {
        this.currentPage = page;
        await this.homePage();
    }


    async detailsPage(item) {
        if (item) {
            this.appElement.innerHTML = `
                <h1>${item.title}</h1>
                <p class="itemin">${item.img}</p>
                <h3>${item.text}</h3>
                <div id="review-section"></div>
                <button class="button-reol" onclick="app.goBack()">Назад</button>
            `;
            new ReviewSystem('review-section', item.id);
        } else {
            this.appElement.innerHTML = `
                <h1>Данные не найдены</h1>
                <button  onclick="app.goBack()">Назад</button>
            `;
        }
    }
    

    viewDetails(element) {
        const item = JSON.parse(element.getAttribute('data-item'));
        history.pushState({ item }, '', `/details/${item.id}`);
        this.detailsPage(item);
    }
    

    goBack() {
        history.pushState(null, '', '/monte.html');
        this.currentPage = 1; 
        this.homePage();
    }
}


window.onpopstate = function(event) {
    if (event.state) {
        app.detailsPage(event.state.item);
    } else {
        app.currentPage = 1; 
        app.homePage();
    }
};

class ReviewSystem {
    constructor(containerId, dataId) {
        this.container = document.getElementById(containerId);
        this.dataId = dataId;
        this.reviewsStorage = JSON.parse(localStorage.getItem('reviews')) || {};
        this.reviews = this.reviewsStorage[dataId] || [];
        this.render();
    }

    saveReviews() {
        this.reviewsStorage[this.dataId] = this.reviews;
        localStorage.setItem('reviews', JSON.stringify(this.reviewsStorage));
    }

    addReview(review) {
        if (review && review.trim().length > 0) {
            this.reviews.push(review);
            this.saveReviews();
            this.render();
        }
    }

    deleteReview(index) {
        this.reviews.splice(index, 1);
        this.saveReviews();
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <h2>Отзывы</h2>
            <div id="reviews-list">
                ${this.reviews.length > 0 
                    ? this.reviews.map((r, i) => `
                        <p>
                            <strong>Отзыв ${i + 1}:</strong> ${r}
                            <button class="delete-review" data-index="${i}">Удалить</button>
                        </p>
                    `).join('')
                    : '<h4>Пока нет отзывов. Будьте первым!</h4>'}
            </div>
            <div class="review-box">
                <textarea id="review-input" placeholder="Введите ваш отзыв"></textarea>
                <button id="submit-review">Оставить отзыв</button>
            </div>
        `;

        document.getElementById('submit-review').onclick = () => {
            const input = document.getElementById('review-input');
            this.addReview(input.value);
            input.value = '';
        };

        document.querySelectorAll('.delete-review').forEach(button => {
            button.onclick = (event) => {
                const index = event.target.dataset.index;
                this.deleteReview(index);
            };
        });
    }
}

const apiUrl = 'https://673add6e339a4ce44519711d.mockapi.io/vrar/test'; 
const apiService = new ApiService(apiUrl);
const app = new App(apiService);


app.homePage();



