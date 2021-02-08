import { ROOM_TYPES, STATUSES_ORDER } from 'constants/index';

export interface ScheduleResponse {
  rooms: RoomDataResponse[];
  orders: OrderDataResponse[];
}

export interface RoomDataResponse {
  id: number;
  type: ROOM_TYPES.LUX | ROOM_TYPES.NORMAL;
  name: string;
}

export interface OrderDataResponse {
  id: number;
  start: string;
  end: string;
  room: RoomDataResponse;
  status: STATUSES_ORDER.PAID | STATUSES_ORDER.NOT_PAID;
}
