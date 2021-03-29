import ReactDOM from 'react-dom';
import React from 'react';
import { CalendarBooking as App } from './app';

export class CalendarBooking {
  mount(root: string): void {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById(root)
    );
  }
}
