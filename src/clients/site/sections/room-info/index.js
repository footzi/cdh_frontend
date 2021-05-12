class RoomInfo {
  constructor() {
    this.initPhotoSliders();
  }

  initPhotoSliders() {
    const sliders = document.querySelectorAll('.room-info__slider') ?? [];

    sliders.forEach((slider) => {
      // eslint-disable-next-line no-undef
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
        nav: true,
        dots: false,
        navText: [
          "<div class='nav-button nav-button-prev'>" +
            '<svg width="9" height="12" viewBox="0 0 9 12">\n' +
            '<path d="M2.02 12L8.02 6L2.02 0L0.610001 1.41L5.19 6L0.610001 10.59L2.02 12Z"/>\n' +
            '</svg></div>',
          "<div class='nav-button nav-button-next'>" +
            '<svg width="9" height="12" viewBox="0 0 9 12">\n' +
            '<path d="M2.02 12L8.02 6L2.02 0L0.610001 1.41L5.19 6L0.610001 10.59L2.02 12Z"/>\n' +
            '</svg></div>',
        ],
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
