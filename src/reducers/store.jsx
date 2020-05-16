import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import storeReducer from './store-reducer';

const initialState = {
  loading: false,
  error: false,
  msg: '',
  lastSearchId: undefined,
  history: {}, // object with search entities (/models/search.js)
};

const Store = createContext(initialState);
export default Store;

export function StoreProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <Store.Provider value={[state, dispatch]}>
      {children}
    </Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node,
};
