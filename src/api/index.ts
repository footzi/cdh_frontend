import { AxiosError, AxiosResponse } from 'axios';
import useAxios from 'axios-hooks';
import { PATHS_QUERY } from './paths';

interface UseRequestResult {
  data: AxiosResponse;
  isLoading: boolean;
  error: AxiosError;
  refetch(): void;
}

const USE_LOCAL_JSON = true;

export const useRequest = (url: string): UseRequestResult => {
  const path = USE_LOCAL_JSON ? PATHS_QUERY[url] : url;

  const [{ data, loading, error }, refetch] = useAxios(path);

  return {
    data,
    isLoading: loading,
    error,
    refetch,
  };
};
