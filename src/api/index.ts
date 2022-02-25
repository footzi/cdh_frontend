import { notification } from 'antd';
import axios, { AxiosError } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import useAxios from 'axios-hooks';
import { Tokens } from 'interfaces';
import { useEffect } from 'react';
import { LocalStorage } from 'utils/localStorage';

import { UseMutationProps, UseMutationResult, UseQueryProps, UseQueryResult } from './interfaces';

const USE_LOCAL_JSON = true;

const refreshAuthLogic = (failedRequest: AxiosError): Promise<unknown> => {
  const { refreshToken } = LocalStorage.get<Tokens>('tokens');

  if (!refreshToken) {
    return Promise.reject();
  }

  return axios({
    method: 'post',
    url: '/api/auth/refresh',
    headers: {
      Authorization: 'Bearer ' + refreshToken,
    },
  }).then((tokenRefreshResponse) => {
    const accessToken = tokenRefreshResponse?.data?.accessToken;
    const refreshToken = tokenRefreshResponse?.data?.refreshToken;

    if (accessToken && refreshToken) {
      LocalStorage.set<Tokens>('tokens', { accessToken, refreshToken });

      if (failedRequest?.response?.config?.headers) {
        failedRequest.response.config.headers['Authorization'] = 'Bearer ' + accessToken;
      }
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  });
};

createAuthRefreshInterceptor(axios, refreshAuthLogic);

export const useQuery = <T>({ url, params, onSuccess, onError, options }: UseQueryProps): UseQueryResult<T> => {
  const tokens = LocalStorage.get<Tokens>('tokens');
  const accessToken = tokens ? tokens.accessToken : null;

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: USE_LOCAL_JSON ? url.json : url.url,
      method: 'GET',
      params,
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    },
    options
  );

  useEffect(() => {
    if (error) {
      onError && onError();
      notification.error({
        message: 'При получении данных произошла ошибка',
        description: error.message,
      });
    }

    if (data && !error) {
      onSuccess && onSuccess();
    }
  }, [data, error, onSuccess, onError]);

  return {
    data,
    isLoading: loading,
    error,
    refetch,
  };
};

export const useMutation = <T>({
  url,
  method = 'POST',
  onSuccess,
  onError,
}: UseMutationProps): UseMutationResult<T> => {
  const tokens = LocalStorage.get<Tokens>('tokens');
  const accessToken = tokens ? tokens.accessToken : null;

  const [{ data, loading, error }, executePut] = useAxios(
    {
      url: USE_LOCAL_JSON ? url.json : url.url,
      method: USE_LOCAL_JSON ? 'GET' : method,
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    },
    { manual: true }
  );

  useEffect(() => {
    if (error) {
      onError && onError();
      notification.error({
        message: 'При получении данных произошла ошибка',
        description: error.message,
      });
    }

    if (data && !error) {
      onSuccess && onSuccess();
    }
  }, [data, error, onSuccess, onError]);

  return {
    data,
    isLoading: loading,
    error,
    errorMessage: error?.response?.data.message,
    executePut,
  };
};

export { ApiPaths } from './paths';
export * from './types';
