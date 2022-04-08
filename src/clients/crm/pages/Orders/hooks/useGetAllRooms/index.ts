import { ApiConfig, useQuery } from 'api';
import { Room } from 'interfaces';

import { UseGetAllRoomsResult } from './interfaces';

export const useGetAllRooms = (): UseGetAllRoomsResult => {
  const { isLoading, data } = useQuery<{ rooms: Room[] }>({ config: ApiConfig.allRooms });

  return {
    isLoading,
    rooms: data?.rooms ?? [],
  };
};
