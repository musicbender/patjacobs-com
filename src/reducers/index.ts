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
  console.log('REDUCER ----- ', action.type);
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return combinedReducers(state, action);
  }
};

export type AppState = ReturnType<typeof combinedReducers>;

export default reducer;
