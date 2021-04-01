import { BookingResponse } from 'api';
import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

import { Form } from './Form';
import { BookingFormProps } from './interfaces';
import { Result } from './Result';

const BookingForm: React.FC<BookingFormProps> = ({ checkedRoomId }) => {
  const [orderResult, setOrderResult] = useState<null | BookingResponse>(null);

  const onSetOrderResult = useCallback((result) => {
    setOrderResult(result);
  }, []);

  return (
    <>
      {orderResult ? (
        <Result result={orderResult} />
      ) : (
        <Form onSetOrderResult={onSetOrderResult} checkedRoomId={checkedRoomId} />
      )}
    </>
  );
};

export const bookingFormMount = (checkedRoomId: string): void => {
  ReactDOM.render(
    <React.StrictMode>
      <BookingForm checkedRoomId={checkedRoomId} />
    </React.StrictMode>,
    document.getElementById('booking-form')
  );
};

export const bookingFormUnmount = (): void => {
  const rootElement = document.getElementById('booking-form');

  if (rootElement) {
    ReactDOM.unmountComponentAtNode(rootElement);
  }
};
