
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

export const App = () => {
  // const [startDate, setStartDate] = useState(new Date());

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        selectsStart
        onChange={(date) => setStartDate(date)}
        excludeDates={[new Date('2021/04/05')]}
        locale={ru}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        showDisabledMonthNavigation
      />
      <DatePicker
        selected={endDate}
        startDate={startDate}
        endDate={endDate}
        selectsEnd
        onChange={(date) => setEndDate(date)}
        excludeDates={[new Date('2021/04/05')]}
        locale={ru}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        showDisabledMonthNavigation
      />
    </>
  );
};
