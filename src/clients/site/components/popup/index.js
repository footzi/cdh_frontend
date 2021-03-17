class Popup {
  constructor(openButton) {
    this.openButton = openButton;
    
    this.bindEvent()
  }
  
  bindEvent() {
    this.openButton.addEventListener('click', this.open.bind(this))
  }
  
  open() {
    const contentId = this.openButton.dataset.popupTargetId;
    
    const popup = document.querySelector(`[data-popup-content-id="${contentId}"]`)
  
    document.body.classList.add('is-popup-open');
    popup.classList.add('is-open');
    console.log(popup);
  }
  
  close() {
  
  }
}


document.querySelectorAll('.popup-open').forEach((openButton) => {
  new Popup(openButton);
});
