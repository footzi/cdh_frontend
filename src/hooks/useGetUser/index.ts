import { ApiPaths, useQuery } from 'api';
import { removeUser, setUser, useCrmContext } from 'crm/context';
import { Maybe, User } from 'interfaces';
import { useEffect } from 'react';

import { UseGetUserResult } from './interfaces';

export const useGetUser = (): UseGetUserResult => {
  const { dispatch } = useCrmContext();
  const { isLoading, data } = useQuery<{ user: Maybe<User> }>({
    url: ApiPaths.user,
  });

  useEffect(() => {
    if (data?.user) {
      dispatch(setUser(data.user));
    } else {
      dispatch(removeUser());
    }
  }, [data, dispatch]);

  return {
    isLoading,
  };
};
