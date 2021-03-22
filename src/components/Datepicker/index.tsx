import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './app';

export class Datepicker {
  constructor() {
    console.log('hello');
  }

  mount() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    document.getElementById('datepicker')
  );
  }
}
