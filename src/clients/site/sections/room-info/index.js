import template from './templates/room.pug';

// eslint-disable-next-line no-undef
const roomSlider = $('.room-info__slides');
const roomThumbs = document.querySelectorAll('.room-info__thumb');

const onChanged = (props) => {
  const slideId = props.item.index + 1;

  if (roomThumbs && roomThumbs.length) {
    roomThumbs.forEach((thumb) => {
      const thumbId = Number(thumb.dataset.slideId);

      if (thumbId === slideId) {
        thumb.classList.add('is-active');
      } else {
        thumb.classList.remove('is-active');
      }
    });
  }
};

// document.addEventListener('DOMContentLoaded', () => {
//   roomSlider.owlCarousel({
//     items: 1,
//     margin: 10,
//     dots: false,
//     onChanged,
//   });
//
//   if (roomThumbs && roomThumbs.length) {
//     roomThumbs.forEach((thumb) => {
//       thumb.addEventListener('click', () => {
//         const indexSlide = Number(thumb.dataset.slideId) - 1;
//
//         roomSlider.trigger('to.owl.carousel', indexSlide);
//       });
//     });
//   }
// });

class RoomInfo {
  constructor() {
    this.container = document.querySelector('.room-info__rooms');
    
    
    this.rooms = Array.from(document.querySelectorAll('.room-info__room'));
    this.prevButton = document.querySelector('.room-info__prev');
    this.nextButton = document.querySelector('.room-info__next');
    this.sliders = document.querySelectorAll('.room-info__slides')
    
    this.bindEvents();
    
    const html = template({
      name: 'Люкс'
    })
    
    this.container.insertAdjacentHTML('afterbegin', html);
    this.initSliders();
    
  }

  bindEvents() {
    this.prevButton.addEventListener('click', this.prev.bind(this));
    this.nextButton.addEventListener('click', this.next.bind(this));
  }
  
  initSliders() {
    const roomSlider = $('.room-info__slides');
  
    document.addEventListener('DOMContentLoaded', function() {
      $(roomSlider).owlCarousel({
        items: 1,
        margin: 10,
        dots: false,
        onChanged,
      });
    })
  
   
    
   
    // document.addEventListener('DOMContentLoaded', () => {
    //   this.sliders.forEach((slider) => {
    //     $(slider).owlCarousel({
    //       items: 1,
    //       margin: 10,
    //       dots: false,
    //       onChanged,
    //     });
    //   })
    // })
    // const roomSlider = $('.room-info__slides');
    // const roomThumbs = document.querySelectorAll('.room-info__thumb');
  }

  open() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlRoomName = urlParams.get('room');

    // if (this.rooms && this.rooms.length) {
    //   this.rooms.forEach((room) => {
    //     const roomName = room.dataset.roomName;
    //
    //     if (roomName === urlRoomName) {
    //       room.classList.add('is-open');
    //     }
    //   });
    // }
  }

  next() {
    const activeIndex = this.rooms.findIndex((room) => room.classList.contains('is-open'));
  
  
    this.rooms[activeIndex].classList.remove('is-open');
    
    console.log(activeIndex + 1 );

    if (activeIndex + 1 < this.rooms.length) {
      this.rooms[activeIndex + 1].classList.add('is-open');
    } else {
      this.rooms[0].classList.add('is-open');
    }
  }

  prev() {}
}

const roomInfo = new RoomInfo();

roomInfo.open();
