import { Client } from 'interfaces';

export interface UseGetAllClientsResult {
  isLoading: boolean;
  clients: Client[];
}
