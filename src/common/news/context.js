import React, { createContext, useReducer, useEffect } from 'react';

import { useActions } from './actions';
import { reducer, initialState } from './reducer';

const NewsStoreContext = createContext(initialState);

const NewsStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useActions(state, dispatch);

  useEffect(() => console.log({ newState: state }), [state]);

  return (
    <NewsStoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </NewsStoreContext.Provider>
  );
};

export { NewsStoreContext, NewsStoreProvider };
