import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import './components/dropdown';
import './components/popup';
import './sections/room-info';
import './sections/header-mobile';
import './sections/callback';
import './index.scss';

// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $('.photo-slider').owlCarousel({
    items: 1,
    nav: true,
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
    dots: false,
  });
});
