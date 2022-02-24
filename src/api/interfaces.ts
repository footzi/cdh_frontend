import { Maybe } from 'api';
import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { Options, ResponseValues, UseAxiosResult } from 'axios-hooks';

export interface UseQueryProps {
  url: ApiPathItem;
  params?: unknown;
  options?: Options;
  onSuccess?(): void;
  onError?(): void;
}

export interface UseQueryResult<T> {
  data: T;
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

export interface UseMutationResult<T> {
  data: T;
  isLoading: boolean;
  error: Maybe<AxiosError>;
  errorMessage?: string;
  executePut(params?: unknown): AxiosPromise<T>;
}

export interface ApiPathItem {
  url: string;
  json: string;
}
