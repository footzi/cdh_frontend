class Popup {
  constructor(openButton) {
    this.openButton = openButton;

    const contentId = this.openButton.dataset.popupTargetId;
    this.popup = document.querySelector(`[data-popup-content-id="${contentId}"]`);

    if (!this.popup) {
      return;
    }

    this.closeButton = this.popup.querySelector('.popup__close');
    this.overlay = this.popup.querySelector('.popup__overlay');

    this.bindEvent();
  }

  bindEvent() {
    this.openButton.addEventListener('click', this.open.bind(this));
    this.closeButton.addEventListener('click', this.close.bind(this));
    this.overlay.addEventListener('click', this.close.bind(this));
  }

  open() {
    document.body.classList.add('is-popup-open');

    const openedPopups = document.querySelectorAll('.popup') ?? [];
    openedPopups.forEach((popup) => popup.classList.remove('is-open'));

    this.popup.classList.add('is-open');
  }

  close() {
    document.body.classList.remove('is-popup-open');
    this.popup.classList.remove('is-open');
  }
}

document.querySelectorAll('.popup-open').forEach((openButton) => {
  new Popup(openButton);
});
