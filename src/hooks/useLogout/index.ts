import { LocalStorageItems } from 'constants/localStorage';

import { ApiConfig, useMutation } from 'api';
import { removeUser, useCrmContext } from 'crm/context';
import { MutationDefaultResponse } from 'interfaces';
import { LocalStorage } from 'utils/localStorage';

import { UseLogoutResult } from './interfaces';

export const useLogout = (): UseLogoutResult => {
  const { dispatch } = useCrmContext();

  const { isLoading, executePut } = useMutation<MutationDefaultResponse>({
    config: ApiConfig.logout,
  });

  const logout = async () => {
    const response = await executePut();

    if (response.data?.success) {
      LocalStorage.remove(LocalStorageItems.USER);
      dispatch(removeUser());
    }
  };

  return {
    isLoading,
    logout,
  };
};
