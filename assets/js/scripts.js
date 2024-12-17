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
const myModalSlider = new ModalWindow('myModals', 'sliderMap', 'modals__close');
const myModalAbout = new ModalWindow('about', 'about-btn', 'about__closex');
const myModalWay = new ModalWindow('myModalex', 'myBtnex', 'modalex__closex');


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


class Slider {
    constructor(select, interval) {
        this.slides = document.querySelectorAll(select);
        this.current = 0;
        this.slide_Interval = setInterval(() => this.nextSlide(), interval);
    }

    nextSlide() {
        this.slides[this.current].className = 'slider__slide';
        this.current = (this.current + 1) % this.slides.length;
        this.slides[this.current].className = 'slider__slide showing';
    }

    stop() {
        clearInterval(this.slide_Interval);
    }

    start(interval) {
        this.stop(); 
        this.slide_Interval = setInterval(() => this.nextSlide(), interval);
    }
}

const slider = new Slider('#slider__slides .slider__slide', 4000);

