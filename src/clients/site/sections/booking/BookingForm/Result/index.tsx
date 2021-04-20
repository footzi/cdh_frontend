import links from 'data/links.json';
import React from 'react';

import { ResultProps } from '../interfaces';

export const Result: React.FC<ResultProps> = ({ result }) => {
  const { id, startDate, endDate, countDays, firstName, phone, email, price } = result;
  // const onClosePopup = useCallback(() => closeAllPopups(), []);

  return (
    <>
      <div className="booking-form-result__thanks">
        <span className="booking-form-result__title">Спасибо</span>
        <span className="booking-form-result__order">
          Бронь <b>№{id}</b> оформлена.
        </span>
      </div>

      <div className="booking-form-result__clients-info">
        <div className="booking-form-result__clients-info-item">
          <span className="booking-form-result__clients-info-title">Даты прибывания:</span>
          <span className="booking-form-result__clients-info-value">
            {startDate} - {endDate}
          </span>
          <span className="booking-form-result__clients-info-count-days">{countDays} дней</span>
        </div>

        <div className="booking-form-result__clients-info-item">
          <span className="booking-form-result__clients-info-title">Ваше имя:</span>
          <span className="booking-form-result__clients-info-value">{firstName}</span>
        </div>

        <div className="booking-form-result__clients-info-item">
          <span className="booking-form-result__clients-info-title">Ваш телефон:</span>
          <span className="booking-form-result__clients-info-value">{phone}</span>
        </div>

        <div className="booking-form-result__clients-info-item">
          <span className="booking-form-result__clients-info-title">Ваш e-mail:</span>
          <span className="booking-form-result__clients-info-value">{email}</span>
        </div>
      </div>

      <p className="booking-form-result__email-text">На ваш e-mail будет отправлена информация о вашем бронировании.</p>

      {/*<div className="booking-form-result__payments-text">Вам доступны два варианта оплаты:</div>*/}

      {/*<ul className="booking-form-result__payments">*/}
      {/*  <li className="booking-form-result__payment">*/}
      {/*    - вы можете оплатить бронь через сайт, нажав на кнопку “Оплатить” ниже*/}
      {/*  </li>*/}
      {/*  <li className="booking-form-result__payment">- либо вы можете внести оплату в день заселения в гостиницу</li>*/}
      {/*</ul>*/}

      <div className="booking-form-result__footer">
        <div className="booking-form-result__cost">
          <span className="booking-form-result__cost-text">Стоимость проживания ({countDays} дней)</span>
          <span className="booking-form-result__cost-value">{price} р</span>
        </div>

        <p className="booking-form-result__insta">
          За процессом открытия гостиницы вы можете следить на нашей страничке в{' '}
          <a href={links.social.instagram} className="link link_theme_normal">
            Instagram
          </a>
        </p>
      </div>

      {/*<div className="booking-form-result-buttons">*/}
      {/*  <Button theme="borders" onClick={onClosePopup}>*/}
      {/*    Оплатить при заселении*/}
      {/*  </Button>*/}
      {/*  <Button theme="borders" onClick={onClosePopup}>*/}
      {/*    Оплатить сейчас*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </>
  );
};
