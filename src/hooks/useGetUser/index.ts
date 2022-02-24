import { ApiPaths, useQuery } from 'api';
import { Admin, Client, Maybe, User } from 'interfaces';
import { useEffect, useState } from 'react';

export interface UseGetUserResult {
  user: Maybe<User>;
  setUser(user: User): void;
  isLoading: boolean;
}

export const useGetUser = (): UseGetUserResult => {
  const [user, setUser] = useState<Maybe<User>>(null);
  const { isLoading, data } = useQuery<{ user: Maybe<User> }>({
    url: ApiPaths.user,
  });

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  }, [data, user]);

  return {
    isLoading,
    user,
    setUser,
  };
};
