import { booking } from '../../sections/booking';

class Popup {
  constructor(openButton) {
    this.openButton = openButton;

    this.contentId = this.openButton.dataset.popupTargetId;
    this.popup = document.querySelector(`[data-popup-content-id="${this.contentId}"]`);

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

  open(event) {
    event.stopPropagation();
    document.body.classList.add('is-popup-open');

    const openedPopups = document.querySelectorAll('.popup') ?? [];
    openedPopups.forEach((popup) => popup.classList.remove('is-open'));

    if (this.contentId === 'booking') {
      const roomId = this.openButton.dataset.roomId;
      booking.init(roomId);
    }

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

document.querySelectorAll('.popup-close').forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    const openedPopups = document.querySelectorAll('.popup') ?? [];
    document.body.classList.remove('is-popup-open');
    openedPopups.forEach((popup) => popup.classList.remove('is-open'));
  });
});
