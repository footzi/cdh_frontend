//@ts-nochec
import { ApiPaths, useMutation, useQuery } from 'api';
import { Admin, Client, Tokens, User } from 'interfaces';
import Cookies from 'js-cookie';
import { useCallback } from 'react';
import { LocalStorage } from 'utils/localStorage';

export interface UseLoginQueryData {
  user: Client | Admin;
  tokens: Tokens;
}

export const useLogin = (setUser: (user: User) => void) => {
  const { isLoading, executePut } = useMutation<UseLoginQueryData>({ url: ApiPaths.login });

  const login = useCallback(
    async (login: string, password: string) => {
      const response = await executePut({
        login,
        password,
      });

      if (response?.data?.user && response?.data?.tokens) {
        const { accessToken, refreshToken } = response.data.tokens;

        LocalStorage.set<Tokens>('tokens', { accessToken, refreshToken });

        setUser(response.data.user);
      }

      // if (response?.data?.tokens)
      //
      // console.log(response);
    },
    [executePut, setUser]
  );

  return {
    login,
  };
  // return data?.user ?? null;
};
