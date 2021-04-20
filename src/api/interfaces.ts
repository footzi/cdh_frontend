import { Maybe } from 'api';
import { AxiosError } from 'axios';

export interface UseQueryProps {
  url: ApiPathItem;
  params?: unknown;
  onSuccess?(): void;
  onError?(): void;
}

export interface UseQueryResult {
  data: unknown;
  isLoading: boolean;
  error: Maybe<AxiosError>;
  refetch(): void;
}

export interface UseMutationProps {
  url: ApiPathItem;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: unknown;
  onSuccess?(): void;
  onError?(): void;
}

export interface UseMutationResult {
  data: unknown;
  isLoading: boolean;
  error: Maybe<AxiosError>;
  errorMessage?: string;
  executePut(): void;
}

export interface ApiPathItem {
  url: string;
  json: string;
}
