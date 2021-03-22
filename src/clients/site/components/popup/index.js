class Popup {
  constructor(openButton) {
    this.openButton = openButton;

    const contentId = this.openButton.dataset.popupTargetId;
    this.popup = document.querySelector(`[data-popup-content-id="${contentId}"]`);
    this.useUrl = !!this.openButton.dataset.popupUseUrl;
    this.targetId = this.openButton.dataset.popupTargetId;
    this.typeId = this.openButton.dataset.popupTypeId;

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
    this.addUrlParams();

    document.body.classList.add('is-popup-open');

    const openedPopups = document.querySelectorAll('.popup') ?? [];
    openedPopups.forEach((popup) => popup.classList.remove('is-open'));

    this.popup.classList.add('is-open');
  }

  close() {
    this.clearUrlParams();

    document.body.classList.remove('is-popup-open');
    this.popup.classList.remove('is-open');
  }

  addUrlParams() {
    if (this.useUrl) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.append(this.targetId, this.typeId);

      window.history.replaceState({}, '', `${window.location.pathname}?${searchParams}`);
    }
  }

  clearUrlParams() {
    if (this.useUrl) {
      window.history.replaceState({}, '', `${window.location.pathname}`);
    }
  }
}

document.querySelectorAll('.popup-open').forEach((openButton) => {
  new Popup(openButton);
});
