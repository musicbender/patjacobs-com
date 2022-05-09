import initialState from '@store/initial-state';
import { AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export default function home(state = initialState, action: AnyAction) {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return state;
    default:
      return state;
  }
}
