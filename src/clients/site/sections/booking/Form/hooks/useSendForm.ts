import { useRequest } from 'api';
import { ApiPaths, UseMutationBookingRoom, useMutation } from 'api';
import { useState } from 'react';

import { Fields, UseSendFormProps, UseSendFormResult } from '../interfaces';

export const useSendForm = ({ onSuccess }: UseSendFormProps): UseSendFormResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const params = {
    id: 1,
  };

  const { data, executePut } = useMutation({ url: ApiPaths.bookingRoom, params, onSuccess }) as UseMutationBookingRoom;

  const sendForm = (fields: Fields) => {
    console.log(fields);
    executePut();
    // setIsLoading(true);
    // console.log(fields);
    //
    // setTimeout(() => {
    //   onSuccess();
    //   setIsLoading(false);
    // }, 1000);
  };

  console.log(data);

  return {
    isLoading,
    sendForm,
  };
};
