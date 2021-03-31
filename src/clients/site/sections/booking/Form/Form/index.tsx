import './index.scss';

import { Button } from 'components/Button';
import { CustomInputProps } from 'components/CalendarBooking/interfaces';
import { Datepicker } from 'components/Datepicker';
import { STARTING_DATE_OF_BOOKING } from 'constants/index';
import rooms from 'data/rooms.json';
import React, { ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react';
import { formatToBackendDate } from 'utils/formatToBackendDate';

import { Fields, FormProps } from '../interfaces';
import { getIsValid } from '../utils/getIsValid';

export const Form: React.FC<FormProps> = ({ sendForm, isLoadingSend }) => {
  const [fields, setFields] = useState<Fields>({
    start: '',
    end: '',
    name: '',
    phone: '',
    comment: '',
    email: '',
    room: '',
  });

  const [isValid, setIsValid] = useState<boolean>(true);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = event.target.value;

      setFields({
        ...fields,
        [name]: value,
      });
    },
    [fields, setFields]
  );

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChangeStart = useCallback((date: Date) => {
    setStartDate(date);
  }, []);

  const onChangeEnd = useCallback((date: Date) => {
    setEndDate(date);
  }, []);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!isValid) {
        sendForm(fields);
      }
    },
    [isValid]
  );

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

  useEffect(() => {
    const start = startDate ? formatToBackendDate(startDate.toString()) : '';
    const end = endDate ? formatToBackendDate(endDate.toString()) : '';

    setFields({
      ...fields,
      start,
      end,
    });
  }, [startDate, endDate]);

  useEffect(() => {
    setIsValid(getIsValid(fields));
  }, [fields]);

  return (
    <form onSubmit={onSubmit}>
      <ul className="booking-form__checkbox-rooms">
        <li className="booking-form__checkbox-room">
          <input
            id={rooms.comfort.id}
            name="room"
            type="radio"
            onChange={onChange}
            checked={rooms.comfort.id === fields.room}
            value={rooms.comfort.id}
            className="booking-form__checkbox-room-input"
          />
          <label htmlFor={rooms.comfort.id} className="booking-form__checkbox-room-label">
            Комфорт
          </label>
        </li>

        <li className="booking-form__checkbox-room">
          <input
            id={rooms.lux.id}
            name="room"
            type="radio"
            onChange={onChange}
            value={rooms.lux.id}
            checked={rooms.lux.id === fields.room}
            className="booking-form__checkbox-room-input"
          />
          <label htmlFor={rooms.lux.id} className="booking-form__checkbox-room-label">
            Люкс
          </label>
        </li>
      </ul>

      <div className="booking-form__number-info">
        Подробнее о номерах{' '}
        <a href="#rooms" className="link link_theme_extra-mini popup-close">
          здесь
        </a>
      </div>

      <div className="booking-form__form-inputs">
        <div className="booking-form__calendar-inputs">
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
        </div>

        <input
          type="text"
          placeholder="Ваше имя"
          name="name"
          className="input"
          value={fields.name}
          onChange={onChange}
        />
        <input
          type="phone"
          placeholder="Ваш телефон"
          name="phone"
          className="input"
          value={fields.phone}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Ваш e-mail"
          name="email"
          className="input"
          value={fields.email}
          onChange={onChange}
        />
      </div>

      <input
        type="text"
        className="input booking-form__form-comments-input"
        value={fields.comment}
        name="comment"
        onChange={onChange}
        placeholder="Комментарий"
      />

      <div className="booking-form__cost">
        <div className="booking-form__cost-title">Предварительная стоимость</div>
        <div className="booking-form__cost-value">2 500 р</div>
      </div>

      <a href="#" className="link link_theme_normal link_theme_mini booking-form__cost-info">
        Как происходит оплата?
      </a>

      <div className="booking-form__submit">
        <Button isDisabled={false} type="submit" isLoading={isLoadingSend}>
          Забронировать номер
        </Button>
      </div>

      <div className="booking-form__agreements">
        Нажимая на кнопку, вы даете согласие на{' '}
        <a href="#" className="link link_theme_extra-mini">
          обработку своих персональных данных.
        </a>
      </div>
      <div id="booking-calendar-portal" />
    </form>
  );
};
