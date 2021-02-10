import useAxios from 'axios-hooks';
import { UseRequestResult, ApiPathItem } from './interfaces';

const USE_LOCAL_JSON = true;

export const useRequest = (pathItem: ApiPathItem): UseRequestResult => {
  const path = USE_LOCAL_JSON ? pathItem.json : pathItem.url;

  const [{ data, loading, error }, refetch] = useAxios(path);

  return {
    data,
    isLoading: loading,
    error,
    refetch,
  };
};

export { ApiPaths } from './paths';
export type { UseRequestResult } from './interfaces';
