import { ApiConfig, UseMutationBookingRoomResponse, useMutation } from 'api';
import { useCallback } from 'react';

import { UseSendFormProps, UseSendFormResult } from '../interfaces';

export const useSendForm = ({ fields }: UseSendFormProps): UseSendFormResult => {
  const { data, isLoading, executePut, errorMessage } = useMutation({
    config: ApiConfig.bookingRoom,
    params: fields,
  }) as UseMutationBookingRoomResponse;

  const sendForm = useCallback(() => {
    executePut();
  }, [executePut]);

  return {
    orderResult: data,
    isLoading,
    sendForm,
    errorMessage,
  };
};
