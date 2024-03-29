import { ApiConfig, useQuery } from 'api';
import { Client } from 'interfaces';

import { UseGetAllClientsResult } from './interfaces';

export const useGetAllClients = (): UseGetAllClientsResult => {
  const { isLoading, data } = useQuery<{ clients: Client[] }>({ config: ApiConfig.allClients });

  return {
    isLoading,
    clients: data?.clients ?? [],
  };
};
