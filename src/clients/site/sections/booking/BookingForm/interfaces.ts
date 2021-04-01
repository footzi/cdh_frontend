import { BookingResponse } from 'api';
import { Maybe } from 'api';

export interface BookingFormProps {
  checkedRoomId: string;
}

export interface FormProps {
  onSetOrderResult(result: BookingResponse): void;
  checkedRoomId: string;
}

export interface ResultProps {
  result: BookingResponse;
}

export interface Fields {
  start: string;
  end: string;
  name: string;
  phone: string;
  comment: string;
  room: string;
  email: string;
}

export interface UseSendFormProps {
  fields: Fields;
}

export interface UseSendFormResult {
  orderResult: Maybe<BookingResponse>;
  isLoading: boolean;
  sendForm(): void;
}

export interface UsePrePriceProps {
  startDate: Date | null;
  endDate: Date | null;
  roomId: string;
}
