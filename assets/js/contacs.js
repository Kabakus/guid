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
const myModalComent = new ModalWindow('conts', 'cont-btn', 'conts__close');
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