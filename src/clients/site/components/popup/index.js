import { bookingFormMount, bookingFormUnmount } from '../../sections/booking/BookingForm';

class Popup {
  constructor(popup) {
    this.popup = popup;
    this.popupId = this.popup.dataset.popupContentId;

    if (!this.popupId) {
      return;
    }

    this.openButtons = document.querySelectorAll(`[data-popup-target-id="${this.popupId}"]`) ?? [];
    this.closeButton = this.popup.querySelector('.popup__close');
    this.overlay = this.popup.querySelector('.popup__overlay');
    this.bindEvent();
  }

  bindEvent() {
    this.openButtons.forEach((button) => button.addEventListener('click', this.open.bind(this)));
    this.closeButton.addEventListener('click', this.close.bind(this));
    this.overlay.addEventListener('click', this.close.bind(this));
  }

  open(event) {
    event.stopPropagation();

    const openedPopups = document.querySelectorAll('.popup.is-open') ?? [];
    openedPopups.forEach((popup) => popup.classList.remove('is-open'));

    if (this.popupId === 'booking') {
      const checkedRoomId = event.target.dataset.roomId ?? '';
      bookingFormMount(checkedRoomId);
    }
    this.scrollValue = window.pageYOffset;

    this.popup.classList.add('is-open');
    document.body.classList.add('is-fixed');
  }

  close() {
    document.body.classList.remove('is-fixed');

    window.scrollTo({
      top: this.scrollValue,
    });

    this.popup.classList.remove('is-open');

    if (this.popupId === 'booking') {
      bookingFormUnmount();
    }
  }
}

// пока только для формы бронирования
// eslint-disable-next-line
export const closeAllPopups = () => {
  const openedPopups = document.querySelectorAll('.popup.is-open') ?? [];
  document.body.classList.remove('is-fixed');
  openedPopups.forEach((popup) => popup.classList.remove('is-open'));

  bookingFormUnmount();
};

document.querySelectorAll('.popup').forEach((popup) => {
  new Popup(popup);
});

// eslint-disable-next-line
export const scrollTopInPopup = (contentId) => {
  const popup = document.querySelector(`[data-popup-content-id=${contentId}]`);

  popup.scrollTo({
    top: 0,
  });
};
