import { User } from 'interfaces';

import { ActionTypes } from './constants';
import { Action, ContextPayload, ContextState } from './interfaces';

export const reducer = (state: ContextState, action: Action<ContextPayload>): ContextState => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload as User };
    default:
      return state;
  }
};
