import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './components/dropdown';
import './components/popup';
import './index.scss';

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
  
  
  const roomSlider = $('.room-info__slides');
  
  roomSlider.owlCarousel({
    items: 1,
    thumbs: true,
    // // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
    // thumbImage: false,
    //
    // // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
    // thumbsPrerendered: true,
    //
    // // Class that will be used on the thumbnail container
    // thumbContainerClass: 'owl-thumbs',
    //
    // // Class that will be used on the thumbnail item's
    // thumbItemClass: 'owl-thumb-item'
  });
  
  // setTimeout(() => {
  //   roomSlider.trigger('to.owl.carousel', 2)
  // }, 1000)
});
