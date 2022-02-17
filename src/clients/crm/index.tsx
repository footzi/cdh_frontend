import 'dayjs/locale/ru';

import './index.less';

import dayjs from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

dayjs.locale('ru_RU');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
