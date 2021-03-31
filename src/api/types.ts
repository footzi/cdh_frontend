import { UseMutationResult } from './interfaces';

// Форма бронирования на сайте
export interface BookingResponse {
  id: string;
  startDate: string;
  endDate: string;
  countDays: string;
  name: string;
  phone: string;
  email: string;
  price: string;
}

export interface UseMutationBookingRoom extends Omit<UseMutationResult, 'data'> {
  data: BookingResponse;
}
