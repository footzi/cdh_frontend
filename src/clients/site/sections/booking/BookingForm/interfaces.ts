import { BookingData, BookingResponse } from 'api';
import { Maybe } from 'api';

export interface BookingFormProps {
  checkedRoomId: string;
}

export interface FormProps {
  onSetOrderResult(result: BookingResponse): void;
  checkedRoomId: string;
}

export interface ResultProps {
  result: BookingData;
}

export interface Fields {
  startDate: string;
  endDate: string;
  firstName: string;
  phone: string;
  comment: string;
  roomTypeId: string;
  email: string;
}

export interface UseSendFormProps {
  fields: Fields;
}

export interface UseSendFormResult {
  orderResult: Maybe<BookingResponse>;
  isLoading: boolean;
  sendForm(): void;
  errorMessage?: string;
}

export interface UsePrePriceProps {
  startDate: Date | null;
  endDate: Date | null;
  roomId: string;
}
