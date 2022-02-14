import { Room } from 'interfaces';

export interface RENDER_ORDER {
  key: number;
  dates: string;
  room: Room;
  price: string;
  status: string;
  pet: string;
  name: string;
  phone: string;
  email: string;
}

export interface UseGetAllOrdersResult {
  isLoading: boolean;
  orders: RENDER_ORDER[];
}
