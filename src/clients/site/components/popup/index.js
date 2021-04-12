import { bookingFormMount, bookingFormUnmount } from '../../sections/booking/BookingForm';

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
    document.body.classList.add('is-fixed');

    const openedPopups = document.querySelectorAll('.popup') ?? [];
    openedPopups.forEach((popup) => popup.classList.remove('is-open'));

    if (this.contentId === 'booking') {
      const checkedRoomId = this.openButton.dataset.roomId ?? '';
      bookingFormMount(checkedRoomId);
    }

    this.popup.classList.add('is-open');
  }

  close() {
    document.body.classList.remove('is-fixed');
    this.popup.classList.remove('is-open');

    if (this.contentId === 'booking') {
      bookingFormUnmount();
    }
  }
}

// eslint-disable-next-line
export const closeAllPopups = () => {
  const openedPopups = document.querySelectorAll('.popup') ?? [];
  document.body.classList.remove('is-fixed');
  openedPopups.forEach((popup) => popup.classList.remove('is-open'));

  bookingFormUnmount();
};

document.querySelectorAll('.popup-open').forEach((openButton) => {
  new Popup(openButton);
});

document.querySelectorAll('.popup-close').forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    closeAllPopups();
  });
});
