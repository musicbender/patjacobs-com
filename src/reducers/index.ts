import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// reducers
import global from './reducer_global';
import home from './reducer_home';

const combinedReducers = combineReducers({
  global,
  home,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return state;
  } else {
    return combinedReducers(state, action);
  }
};

export type AppState = ReturnType<typeof combinedReducers>;

export default reducer;
