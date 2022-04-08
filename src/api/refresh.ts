import { LocalStorageItems } from 'constants/localStorage';

import axios from 'axios';
import { AxiosError } from 'axios';
import { UserLS } from 'interfaces';
import { LocalStorage } from 'utils/localStorage';

export const refreshAuthLogic = async (failedRequest: AxiosError): Promise<void | string | undefined> => {
  const savedUser = LocalStorage.get<UserLS>(LocalStorageItems.USER);

  if (!savedUser) {
    return Promise.reject();
  }

  try {
    const response = await axios({
      method: 'put',
      url: '/api/auth/refresh',
      headers: {
        Authorization: 'Bearer ' + savedUser.tokens.refreshToken,
      },
    });

    const accessToken = response?.data?.tokens.accessToken;
    const refreshToken = response?.data?.tokens.refreshToken;

    if (accessToken && refreshToken) {
      const updatedUser = { ...savedUser, tokens: { accessToken, refreshToken } };
      LocalStorage.set<UserLS>(LocalStorageItems.USER, updatedUser);

      if (failedRequest?.response?.config?.headers) {
        failedRequest.response.config.headers['Authorization'] = 'Bearer ' + accessToken;
      }
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  } catch (e) {
    return Promise.reject();
  }
};
