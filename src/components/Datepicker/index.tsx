import React from 'react';
import ru from 'date-fns/locale/ru';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';
import { DatepickerProps } from './interfaces';

export const Datepicker: React.FC<DatepickerProps> = ({
  selected,
  startDate,
  endDate,
  minDate,
  onChange,
  portalId,
  ...rest
}) => {
  return (
    <DatePicker
      selected={selected}
      startDate={startDate}
      endDate={endDate}
      selectsStart
      onChange={onChange}
      locale={ru}
      dateFormat="dd-MM-yyyy"
      minDate={minDate}
      disabledKeyboardNavigation
      showDisabledMonthNavigation
      portalId={portalId}
      {...rest}
    />
  );
};
