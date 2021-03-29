import { CalendarBooking } from 'components/CalendarBooking';
import resultTemplate from './result/index.pug';

class Booking {
  constructor() {
    this.container = document.querySelector('.booking');
    this.content = document.querySelector('.booking__content');
    this.roomTypeInputs = this.container.querySelectorAll('.booking-form__checkbox-room-input') ?? [];
    this.form = this.container.querySelector('form');
    this.submitButton = this.container.querySelector('button[type="submit"]');
    this.closePopupButon = this.container.querySelectorAll('.querySelectorAll');

    this.initCalendar();
    this.bindEvents();
  }

  initCalendar() {
    const calendar = new CalendarBooking();

    calendar.mount('booking-calendar');
  }

  bindEvents() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      this.submit();
    });
  }

  init(roomId) {
    if (roomId) {
      this.roomTypeInputs.forEach((input) => {
        const id = input.id;

        if (id === roomId) {
          input.checked = true;
        }
      });
    }
  }

  submit() {
    // const formData = new FormData(this.form);
    this.submitButton.classList.add('is-loading');

    setTimeout(() => {
      this.submitButton.classList.remove('is-loading');

      const result = {
        id: '0057',
        startDate: '07.07.2021',
        endDate: '07.07.2021',
        countDays: '14',
        name: 'Мария',
        phone: '+7(980)758-78-98',
        email: 'specy98@mail.ru',
        price: '7700',
      };

      this.content.innerHTML = resultTemplate(result);
    }, 1000);
  }
}

const booking = new Booking();
export { booking };
