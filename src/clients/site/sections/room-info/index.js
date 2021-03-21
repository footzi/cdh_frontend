import $ from 'jquery';

class RoomInfo {
  constructor() {
    this.prevRoomButton = document.querySelector('.room-info__prev');
    this.nextRoomButton = document.querySelector('.room-info__next');
    this.$roomSlider = $('.room-info__rooms');

    this.bindEvents();
    this.initRoomsSlider();
    this.initPhotoSliders();
  }

  bindEvents() {
    this.prevRoomButton.addEventListener('click', () => this.$roomSlider.trigger('prev.owl.carousel'));
    this.nextRoomButton.addEventListener('click', () => this.$roomSlider.trigger('next.owl.carousel'));
  }

  initRoomsSlider() {
    const onChanged = (props) => {
      const count = props.item.count;
      const currentIndex = props.item.index;

      this.nextRoomButton.classList.remove('is-disabled');
      this.prevRoomButton.classList.remove('is-disabled');

      if (count === currentIndex + 1) {
        this.nextRoomButton.classList.add('is-disabled');
      }

      if (currentIndex === 0) {
        this.prevRoomButton.classList.add('is-disabled');
      }
    };

    $(this.$roomSlider).owlCarousel({
      items: 1,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      onChanged,
    });
  }

  initPhotoSliders() {
    const sliders = document.querySelectorAll('.room-info__slider') ?? [];

    sliders.forEach((slider) => {
      const $photoSlider = $(slider.querySelector('.room-info__slides'));
      const thumbs = slider.querySelectorAll('.room-info__thumb') ?? [];

      const onChanged = (props) => {
        const slideId = props.item.index + 1;

        if (thumbs.length) {
          thumbs.forEach((thumb) => {
            const thumbId = Number(thumb.dataset.slideId);

            if (thumbId === slideId) {
              thumb.classList.add('is-active');
            } else {
              thumb.classList.remove('is-active');
            }
          });
        }
      };

      $photoSlider.owlCarousel({
        items: 1,
        margin: 10,
        dots: false,
        onChanged,
      });

      thumbs.forEach((thumb) => {
        thumb.addEventListener('click', () => {
          const indexSlide = Number(thumb.dataset.slideId) - 1;

          $photoSlider.on('to.owl.carousel', (event) => event.stopPropagation());
          $photoSlider.trigger('to.owl.carousel', indexSlide);
        });
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new RoomInfo();
});
