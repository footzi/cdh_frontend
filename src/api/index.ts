import { LocalStorageItems } from 'constants/localStorage';

import { notification } from 'antd';
import Axios, { AxiosError } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import useAxios, { configure } from 'axios-hooks';
import { UserLS } from 'interfaces';
import { useEffect } from 'react';
import { LocalStorage } from 'utils/localStorage';

import { UseMutationProps, UseMutationResult, UseQueryProps, UseQueryResult } from './interfaces';
import { refreshAuthLogic } from './refresh';

const USE_LOCAL_JSON = false;

const axios = Axios.create();

configure({ axios });

createAuthRefreshInterceptor(axios, refreshAuthLogic);

export const useQuery = <T>({ config, params, onSuccess, onError, options }: UseQueryProps): UseQueryResult<T> => {
  const savedUser = !config.isPublic ? LocalStorage.get<UserLS>(LocalStorageItems.USER) : null;
  const accessToken = savedUser ? savedUser.tokens.accessToken : null;

  const url = USE_LOCAL_JSON ? config.json : config.url;
  const method = USE_LOCAL_JSON ? 'GET' : config.method ? config.method : 'GET';

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url,
      method,
      data: params,
      headers: {
        Authorization: `${!config.isPublic ? 'Bearer ' + accessToken : null}`,
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

export const useMutation = <T>({ config, onSuccess, onError }: UseMutationProps): UseMutationResult<T> => {
  const savedUser = !config.isPublic ? LocalStorage.get<UserLS>(LocalStorageItems.USER) : null;
  const accessToken = savedUser ? savedUser.tokens.accessToken : null;

  const url = USE_LOCAL_JSON ? config.json : config.url;
  const method = USE_LOCAL_JSON ? 'GET' : config.method ? config.method : 'POST';

  const [{ data, loading, error }, executePut] = useAxios(
    {
      url,
      method,
      headers: {
        Authorization: `${!config.isPublic ? 'Bearer ' + accessToken : null}`,
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

export { ApiConfig } from './paths';
export * from './types';
