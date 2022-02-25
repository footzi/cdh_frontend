import { ContextState } from 'crm/context/interfaces';
import React, { useContext, useReducer } from 'react';

import { reducer } from './reducer';
import { initialState } from './state';

export const Context = React.createContext<ContextState>(initialState);

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>;
};

export const useCrmContext = () => useContext(Context);

export * from './actions';
