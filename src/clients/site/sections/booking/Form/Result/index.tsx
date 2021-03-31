import './index.scss';

import { Button } from 'components/Button';
import React from 'react';

export const Result: React.FC = () => {
  const result = {
    id: '0057',
    startDate: '07.07.2021',
    endDate: '07.07.2021',
    countDays: '14',
    name: 'Мария',
    phone: '+7(980)758-78-98',
    email: 'specy98@mail.ru',
    price: '7700',
  };

  const { id, startDate, endDate, countDays, name, phone, email, price } = result;

  return (
    <div>
      <div className="booking-form__thanks">
        <span className="booking-form__title">Спасибо</span>
        <span className="booking-form__order">
          Бронь <b>№{id}</b> оформлена.
        </span>
      </div>

      <div className="booking-form__clients-info">
        <div className="booking-form__clients-info-item">
          <span className="booking-form__clients-info-title">Даты прибывания:</span>
          <span className="booking-form__clients-info-value">
            {startDate} - {endDate}
          </span>
          <span className="booking-form__clients-info-count-days">{countDays} дней</span>
        </div>

        <div className="booking-form__clients-info-item">
          <span className="booking-form__clients-info-title">Ваше имя:</span>
          <span className="booking-form__clients-info-value">{name}</span>
        </div>

        <div className="booking-form__clients-info-item">
          <span className="booking-form__clients-info-title">Ваш телефон:</span>
          <span className="booking-form__clients-info-value">{phone}</span>
        </div>

        <div className="booking-form__clients-info-item">
          <span className="booking-form__clients-info-title">Ваш e-mail:</span>
          <span className="booking-form__clients-info-value">{email}</span>
        </div>
      </div>

      <p className="booking-form__email-text">На ваш e-mail будет отправлена информация о вашем бронировании.</p>

      <div className="booking-form__payments-text">Вам доступны два варианта оплаты:</div>

      <ul className="booking-form__payments">
        <li className="booking-form__payment">
          - вы можете оплатить бронь через сайт, нажав на кнопку “Оплатить” ниже
        </li>
        <li className="booking-form__payment">- либо вы можете внести оплату в день заселения в гостиницу</li>
      </ul>

      <div className="booking-form__cost">
        <span className="booking-form__cost-text">Стоимость проживания ({countDays} дней)</span>
        <span className="booking-form__cost-value">{price}р</span>
      </div>

      <div className="booking-form-buttons">
        <Button theme="borders">Оплатить при заселении</Button>
        <Button theme="borders">Оплатить сейчас</Button>
      </div>
    </div>
  );
};
