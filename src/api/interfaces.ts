import { Maybe } from 'api';
import { AxiosError, AxiosPromise } from 'axios';
import { Options } from 'axios-hooks';

export interface UseQueryProps {
  config: ApiConfigItem;
  params?: unknown;
  options?: Options;
  isSkip?: boolean;
  onSuccess?(): void;
  onError?(): void;
}

export interface UseQueryResult<T> {
  data: T;
  isLoading: boolean;
  error: Maybe<AxiosError>;
  refetch(params?: unknown): AxiosPromise<T>;
}

export interface UseMutationProps {
  config: ApiConfigItem;
  params?: unknown;
  onSuccess?(): void;
  onError?(): void;
}

export interface UseMutationResult<T> {
  data: T;
  isLoading: boolean;
  error: Maybe<AxiosError>;
  errorMessage?: string;
  executePut(params?: unknown): AxiosPromise<T>;
}

export interface ApiConfigItem {
  url: string;
  json?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  isPublic?: false;
}
