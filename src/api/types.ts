import { ROOM_TYPES, STATUSES_ORDER } from 'constants/index';

import { UseMutationResult, UseQueryResult } from './interfaces';

export type Maybe<T> = T | (null | undefined);

// Форма бронирования на сайте
export interface BookingResponse {
  order: Maybe<BookingData>;
}

export interface BookingData {
  id: string;
  startDate: string;
  endDate: string;
  countDays: string;
  firstName: string;
  phone: string;
  email: string;
  price: string;
}

export interface UseMutationBookingRoomResponse extends Omit<UseMutationResult, 'data'> {
  data: Maybe<BookingResponse>;
}

// Календарь в CRM
export interface UseQueryGetScheduleRequest extends Omit<UseQueryResult, 'data'> {
  data: ScheduleResponse;
}

export interface RoomDataResponse {
  id: number;
  type: ROOM_TYPES.LUX | ROOM_TYPES.NORMAL;
  name: string;
}

export interface OrderDataResponse {
  id: number;
  uuid: string;
  start: string;
  end: string;
  room: RoomDataResponse;
  status: STATUSES_ORDER.PAID | STATUSES_ORDER.NOT_PAID;
}

export interface ScheduleResponse {
  rooms: RoomDataResponse[];
  orders: OrderDataResponse[];
}
