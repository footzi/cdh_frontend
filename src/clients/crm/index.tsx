import 'dayjs/locale/ru';

import './index.less';

import dayjs from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { ContextProvider } from './context';

dayjs.locale('ru_RU');

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
