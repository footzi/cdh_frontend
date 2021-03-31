import useAxios from 'axios-hooks';

import { UseMutationProps, UseMutationResult, UseRequestProps, UseRequestResult } from './interfaces';

const USE_LOCAL_JSON = true;

export const useRequest = ({ url, method = 'GET', params }: UseRequestProps): UseRequestResult => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: USE_LOCAL_JSON ? url.json : url.url,
    method,
    params,
  });

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

  if (error) {
    onError && onError();
  }

  if (data && !error) {
    onSuccess && onSuccess();
  }

  return {
    data,
    isLoading: loading,
    error,
    executePut,
  };
};

export { ApiPaths } from './paths';
export type { UseRequestResult } from './interfaces';
export * from './types';
