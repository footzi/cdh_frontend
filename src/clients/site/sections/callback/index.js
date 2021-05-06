import { ApiPaths } from 'api';
import axios from 'axios';

class Callback {
  constructor() {
    this.container = document.querySelector('.callback');

    if (!this.container) {
      return null;
    }

    this.form = this.container.querySelector('form');
    this.inputs = this.form.querySelectorAll('input') ?? [];
    this.submitButton = this.form.querySelector('button[type="submit"]');
    this.successText = this.form.querySelector('.callback__success');
    this.errorText = this.form.querySelector('.callback__error');

    this.values = {
      name: '',
      phone: '',
    };

    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.submit();
    });

    this.inputs.forEach((input) => {
      input.addEventListener('input', (event) => this.change(event));
    });
  }

  change(event) {
    const { name, value } = event.target;

    this.values = {
      ...this.values,
      [name]: value,
    };

    if (this.values.phone && this.values.name) {
      this.submitButton.removeAttribute('disabled');
    } else {
      this.submitButton.setAttribute('disabled', 'true');
    }
  }

  async submit() {
    this.submitButton.classList.add('is-loading');
    this.successText.classList.remove('is-visible');
    this.errorText.classList.remove('is-visible');

    try {
      const isSuccessful = await axios.post(ApiPaths.callback.url, this.values);

      if (isSuccessful) {
        this.successText.classList.add('is-visible');
      }
    } catch (e) {
      this.errorText.classList.add('is-visible');
    } finally {
      this.submitButton.classList.remove('is-loading');
    }
  }
}

new Callback();
