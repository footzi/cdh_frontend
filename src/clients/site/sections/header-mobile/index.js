class MobileMenu {
  constructor() {
    this.header = document.querySelector('.header-mobile');
    this.openButton = this.header.querySelector('.header-mobile__open-menu');
    this.menu = this.header.querySelector('.header-mobile__menu');
    this.links = this.header.querySelectorAll('.header-mobile__menu-links');

    this.menu.style.removeProperty('display');

    this.bindEvents();
  }

  bindEvents() {
    this.openButton.addEventListener('click', this.handleClick.bind(this));
    this.links.forEach((link) => {
      link.addEventListener('click', this.handleClick.bind(this));
    });
  }

  handleClick() {
    this.openButton.classList.toggle('is-open');
    this.menu.classList.toggle('is-open');
    document.body.classList.toggle('is-overflow');
  }
}

new MobileMenu();
