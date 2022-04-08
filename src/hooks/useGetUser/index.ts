import { LocalStorageItems } from 'constants/localStorage';

import { ApiConfig, useQuery } from 'api';
import { removeUser, setUser, useCrmContext } from 'crm/context';
import { Maybe, User, UserLS } from 'interfaces';
import { useEffect } from 'react';
import { LocalStorage } from 'utils/localStorage';

import { UseGetUserResult } from './interfaces';

export const useGetUser = (): UseGetUserResult => {
  const { dispatch } = useCrmContext();

  const { isLoading, refetch: getUser } = useQuery<{ user: Maybe<User> }>({
    config: ApiConfig.user,
    options: {
      manual: true,
    },
  });

  useEffect(() => {
    (async () => {
      const savedUser = LocalStorage.get<UserLS>(LocalStorageItems.USER);

      if (savedUser) {
        const response = await getUser({
          data: {
            id: savedUser.id,
          },
        });

        if (response?.data?.user) {
          dispatch(setUser(response.data.user));
        } else {
          dispatch(removeUser());
        }
      }
    })();
  }, []);

  return {
    isLoading,
  };
};
