import { ApiConfig, useQuery } from 'api';
import { Order } from 'interfaces';

import { UseGetAllOrdersResult } from './interfaces';
import { normalizeOrders } from './utils/normalizeOrders';

export const useGetAllOrders = (): UseGetAllOrdersResult => {
  const { isLoading, data } = useQuery<{ orders: Order[] }>({ config: ApiConfig.allOrders });

  return {
    isLoading,
    renderOrders: data?.orders?.map(normalizeOrders) ?? [],
    orders: data?.orders ?? [],
  };
};
