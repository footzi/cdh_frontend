import { CalendarBooking } from 'components/CalendarBooking';
import resultTemplate from './result/index.pug';

class Booking {
  constructor() {
    this.container = document.querySelector('.booking');
    this.content = document.querySelector('.booking__content');
    this.roomTypeInputs = this.container.querySelectorAll('.booking-form__checkbox-room-input') ?? [];

    this.submitButton = this.container.querySelector('button[type="submit"]');
    this.formData = null;
    this.isDisabledSubmit = true;

    // this.initCalendar();

    this.form = this.container.querySelector('form');
    this.inputs = this.form.querySelectorAll('input') ?? [];

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

    this.inputs.forEach((input) => {
      input.addEventListener('input', (event) => {
        this.setFormData();
        this.checkIsDisabledSubmit();
      });
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

  setFormData() {
    this.formData = new FormData(this.form);
  }

  checkIsDisabledSubmit() {
    console.log('change');

    if (!this.formData) {
      return null;
    }

    const start = this.formData.get('start');
    const end = this.formData.get('end');
    const phone = this.formData.get('phone');
    const email = this.formData.get('email');
    const name = this.formData.get('name');
    const room = this.formData.get('room');

    this.isDisabledSubmit = !start || !end || !phone || !email || !name || !room;

    if (this.isDisabledSubmit) {
      this.submitButton.setAttribute('disabled', 'disabled');
    } else {
      this.submitButton.removeAttribute('disabled');
    }

    console.log(this.isDisabledSubmit);
  }

  submit() {
    const formData = new FormData(this.form);

    // console.log(new FormData(this.form));

    return;

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

// const booking = new Booking();
// export { booking };
