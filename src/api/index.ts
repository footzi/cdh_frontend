import useAxios from 'axios-hooks';
import { useEffect } from 'react';

import { UseMutationProps, UseMutationResult, UseQueryProps, UseQueryResult } from './interfaces';

const USE_LOCAL_JSON = false;

export const useQuery = ({ url, params, onSuccess, onError }: UseQueryProps): UseQueryResult => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: USE_LOCAL_JSON ? url.json : url.url,
    method: 'GET',
    params,
  });

  useEffect(() => {
    if (error) {
      onError && onError();
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

export const useMutation = ({
  url,
  method = 'POST',
  params,
  onSuccess,
  onError,
}: UseMutationProps): UseMutationResult => {
  const [{ data, loading, error }, executePut] = useAxios(
    {
      url: USE_LOCAL_JSON ? url.json : url.url,
      method: USE_LOCAL_JSON ? 'GET' : method,
      data: params,
    },
    { manual: true }
  );

  useEffect(() => {
    if (error) {
      onError && onError();
    }

    if (data && !error) {
      onSuccess && onSuccess();
    }
  }, [data, error, onSuccess, onError]);

  return {
    data,
    isLoading: loading,
    error,
    executePut,
  };
};

export { ApiPaths } from './paths';
export * from './types';
