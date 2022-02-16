import { RENDER_ORDER } from '../../interfaces';

export interface UseGetAllOrdersResult {
  isLoading: boolean;
  orders: RENDER_ORDER[];
}
