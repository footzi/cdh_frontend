import $ from 'jquery';

class RoomInfo {
  constructor() {
    this.initPhotoSliders();
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
        onRefreshed: () => {
          $photoSlider.addClass('is-init');
        },
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
