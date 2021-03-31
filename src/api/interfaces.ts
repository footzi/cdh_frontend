import { AxiosError } from 'axios';
import { Maybe } from 'interfaces';

export interface UseRequestProps {
  url: ApiPathItem;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: unknown;
}

export interface UseMutationProps {
  url: ApiPathItem;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: unknown;
  onSuccess?(): void;
  onError?(): void;
}

export interface UseRequestResult {
  data: unknown;
  isLoading: boolean;
  error: Maybe<AxiosError>;
  refetch(): void;
}

export interface UseMutationResult {
  data: unknown;
  isLoading: boolean;
  error: Maybe<AxiosError>;
  executePut(): void;
}

export interface ApiPathItem {
  url: string;
  json: string;
}
