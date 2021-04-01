import { Datepicker } from 'components/Datepicker';
import { STARTING_DATE_OF_BOOKING } from 'constants/index';
import React, { ForwardedRef, forwardRef, useCallback, useState } from 'react';

import { CustomInputProps } from './interfaces';

export const CalendarBooking: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChangeStart = useCallback((date: Date) => {
    setStartDate(date);
  }, []);

  const onChangeEnd = useCallback((date: Date) => {
    setEndDate(date);
  }, []);

  const StartInput = forwardRef(
    ({ value, onChange, onClick }: CustomInputProps, ref: ForwardedRef<HTMLInputElement>) => (
      <input
        className="input"
        placeholder="Дата заезда"
        name="start"
        onChange={onChange}
        onClick={onClick}
        ref={ref}
        value={value}
        autoComplete="off"
      />
    )
  );

  const EndInput = forwardRef(({ value, onChange, onClick }: CustomInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      className="input"
      placeholder="Дата отъезда"
      name="end"
      onChange={onChange}
      onClick={onClick}
      ref={ref}
      value={value}
      autoComplete="off"
    />
  ));

  return (
    <>
      <Datepicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={onChangeStart}
        minDate={new Date(STARTING_DATE_OF_BOOKING)}
        customInput={<StartInput />}
        portalId="booking-calendar-portal"
        dateFormat="dd.MM.yyyy"
      />

      <Datepicker
        selected={endDate}
        startDate={startDate}
        endDate={endDate}
        onChange={onChangeEnd}
        minDate={startDate}
        customInput={<EndInput />}
        portalId="booking-calendar-portal"
        dateFormat="dd.MM.yyyy"
      />
    </>
  );
};
