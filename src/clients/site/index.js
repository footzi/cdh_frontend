import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './components/dropdown';
import './components/popup';
import './sections/room-info';
import './index.scss';

import { Datepicker } from 'components/Datepicker';

// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $('.photo-slider').owlCarousel({
    items: 1,
    nav: true,
    navText: ["<div class='nav-button nav-button-prev'></div>", "<div class='nav-button nav-button-next'></div>"],
    dots: false,
  });

  // eslint-disable-next-line no-undef
  $('.reviews__slider').owlCarousel({
    items: 1,
    dots: true,
  });
});

const pick = new Datepicker();

pick.mount();
