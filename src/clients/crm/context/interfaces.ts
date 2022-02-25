import { Maybe, User } from 'interfaces';
import { Dispatch } from 'react';

import { ActionTypes } from './constants';

export interface ContextState {
  user: Maybe<User>;
  dispatch: Dispatch<Action<ContextPayload>>;
}

export type Action<TPayload> = {
  type: ActionTypes;
  payload: TPayload;
};

export type ContextPayload = User | null;
