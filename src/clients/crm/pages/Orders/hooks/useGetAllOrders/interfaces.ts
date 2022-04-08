import { Order } from 'interfaces';

import { RenderOrder } from '../../interfaces';

export interface UseGetAllOrdersResult {
  isLoading: boolean;
  orders: Order[];
  renderOrders: RenderOrder[];
}
