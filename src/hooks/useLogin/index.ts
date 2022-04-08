import { LocalStorageItems } from 'constants/index';

import { ApiConfig, useMutation } from 'api';
import { setUser, useCrmContext } from 'crm/context';
import { UserLS } from 'interfaces';
import { useCallback } from 'react';
import { LocalStorage } from 'utils/localStorage';

import { UseLoginQueryData } from './interfaces';

export const useLogin = () => {
  const { isLoading, executePut } = useMutation<UseLoginQueryData>({ config: ApiConfig.login });
  const { dispatch } = useCrmContext();

  const login = useCallback(
    async (login: string, password: string) => {
      const response = await executePut({
        data: {
          login,
          password,
        },
      });

      if (response?.data?.user && response?.data?.tokens && response.data.user.id) {
        const { accessToken, refreshToken } = response.data.tokens;

        LocalStorage.set<UserLS>(LocalStorageItems.USER, {
          tokens: { accessToken, refreshToken },
          id: response.data.user.id,
        });
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
