import { ApiPaths, useQuery } from 'api';
import { Order } from 'interfaces';

import { UseGetAllOrdersResult } from './interfaces';
import { normalizeOrders } from './utils/normalizeOrders';

export const useGetAllOrders = (): UseGetAllOrdersResult => {
  const { isLoading, data } = useQuery<{ orders: Order[] }>({ url: ApiPaths.allOrders });

  return {
    isLoading,
    orders: data?.orders?.map(normalizeOrders) ?? [],
  };
};
