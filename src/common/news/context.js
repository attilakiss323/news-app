import React, { createContext, useReducer, useEffect } from 'react';

import { useActions } from './actions';
import { reducer, initialState } from './reducer';
import { usePersist, useHydrate } from '../utils';

const hydratedState = useHydrate(initialState, ['language']);

const NewsStoreContext = createContext(hydratedState);

const persistWhitelist = ['language'];

const NewsStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, hydratedState);

  usePersist(state, persistWhitelist);

  const actions = useActions(state, dispatch);

  useEffect(() => console.log({ newState: state }), [state]);

  return (
    <NewsStoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </NewsStoreContext.Provider>
  );
};

export { NewsStoreContext, NewsStoreProvider };
