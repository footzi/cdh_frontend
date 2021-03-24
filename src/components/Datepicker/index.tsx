import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './app';

export class Datepicker {
  mount({ root }): void {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById(root)
    );
  }
}
