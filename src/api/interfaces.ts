import { AxiosError } from 'axios';
import { Maybe } from 'interfaces';

export interface UseRequestResult {
  data: unknown;
  isLoading: boolean;
  error: Maybe<AxiosError>;
  refetch(): void;
}

export interface ApiPathItem {
  url: string;
  json: string;
}
