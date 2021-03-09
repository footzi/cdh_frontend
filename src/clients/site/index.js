import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './index.scss';

$(document).ready(function () {
  $('.photo-slider').owlCarousel({
    items: 1,
    nav: true,
    navText: ["<div class='nav-button nav-button-prev'></div>", "<div class='nav-button nav-button-next'></div>"],
  });
});
