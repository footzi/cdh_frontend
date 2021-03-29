import React, { useCallback, useState, forwardRef, ForwardedRef } from 'react';
import { Datepicker } from 'components/Datepicker';
import { CustomInputProps } from './interfaces';

export const CalendarBooking: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChangeStart = useCallback((date: Date) => {
    setStartDate(date);
  }, []);

  const onChangeEnd = useCallback((date: Date) => {
    setEndDate(date);
  }, []);

  const StartInput = forwardRef(
    ({ value, onChange, onClick }: CustomInputProps, ref: ForwardedRef<HTMLInputElement>) => (
      <input className="input" onChange={onChange} onClick={onClick} ref={ref} value={value} />
    )
  );

  return (
    <>
      <Datepicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={onChangeStart}
        minDate={new Date()}
        customInput={<StartInput />}
      />

      <Datepicker
        selected={endDate}
        startDate={startDate}
        endDate={endDate}
        onChange={onChangeEnd}
        minDate={startDate}
        customInput={<StartInput />}
      />
      {/*<DatePicker*/}
      {/*  selected={startDate}*/}
      {/*  startDate={startDate}*/}
      {/*  endDate={endDate}*/}
      {/*  selectsStart*/}
      {/*  onChange={(date) => setStartDate(date)}*/}
      {/*  locale={ru}*/}
      {/*  dateFormat="dd-MM-yyyy"*/}
      {/*  minDate={new Date()}*/}
      {/*  disabledKeyboardNavigation*/}
      {/*  showDisabledMonthNavigation*/}
      {/*/>*/}
      {/*<DatePicker*/}
      {/*  selected={endDate}*/}
      {/*  startDate={startDate}*/}
      {/*  endDate={endDate}*/}
      {/*  selectsEnd*/}
      {/*  onChange={(date) => setEndDate(date)}*/}
      {/*  locale={ru}*/}
      {/*  dateFormat="dd-MM-yyyy"*/}
      {/*  minDate={startDate}*/}
      {/*  disabledKeyboardNavigation*/}
      {/*  showDisabledMonthNavigation*/}
      {/*/>*/}
    </>
  );
};
