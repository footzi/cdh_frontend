// (data-dropdown-open-default="true")

class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.header = this.dropdown.querySelector('.dropdown__header');
    this.content = this.dropdown.querySelector('.dropdown__content');
    this.container = this.dropdown.querySelector('.dropdown__container');

    this.isOpen = false;

    this.bindEvents();
  }

  bindEvents() {
    this.header.addEventListener('click', this.handleClick.bind(this));

    document.addEventListener('DOMContentLoaded', this.handleLoad.bind(this));
  }

  handleClick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  handleLoad() {
    const isOpenDefault = !!this.dropdown.dataset.dropdownOpenDefault;

    if (isOpenDefault) {
      this.open();
    }
  }

  open() {
    const contentHeight = this.content.offsetHeight;
    this.container.style.height = contentHeight + 'px';
    this.dropdown.classList.add('is-open');

    this.isOpen = true;
  }

  close() {
    this.container.style.height = 0;
    this.dropdown.classList.remove('is-open');

    this.isOpen = false;
  }
}

document.querySelectorAll('.dropdown').forEach((dropdown) => {
  new Dropdown(dropdown);
});
