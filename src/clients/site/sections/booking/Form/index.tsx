import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

import { Form } from './Form';
import { useSendForm } from './hooks/useSendForm';
import { Result } from './Result';

const BookingForm: React.FC = () => {
  const [isShownOrderResult, setIsShownOrderResult] = useState<boolean>(false);

  const { sendForm, isLoading } = useSendForm({
    onSuccess: useCallback(() => setIsShownOrderResult(true), []),
  });

  return <>{isShownOrderResult ? <Result /> : <Form sendForm={sendForm} isLoadingSend={isLoading} />}</>;
};

ReactDOM.render(
  <React.StrictMode>
    <BookingForm />
  </React.StrictMode>,
  document.getElementById('booking-form')
);
