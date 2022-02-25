import { ApiPaths, useMutation } from 'api';
import { setUser, useCrmContext } from 'crm/context';
import { Tokens } from 'interfaces';
import { useCallback } from 'react';
import { LocalStorage } from 'utils/localStorage';

import { UseLoginQueryData } from './interfaces';

export const useLogin = () => {
  const { isLoading, executePut } = useMutation<UseLoginQueryData>({ url: ApiPaths.login });
  const { dispatch } = useCrmContext();

  const login = useCallback(
    async (login: string, password: string) => {
      const response = await executePut({
        login,
        password,
      });

      if (response?.data?.user && response?.data?.tokens) {
        const { accessToken, refreshToken } = response.data.tokens;

        LocalStorage.set<Tokens>('tokens', { accessToken, refreshToken });
        dispatch(setUser(response.data.user));
      }
    },
    [executePut, dispatch]
  );

  return {
    login,
    isLoading,
  };
};
