import initialState from 'src/lib/store/initial-state';
import { AnyAction } from 'redux';
import { MODE_CHANGED } from 'src/lib/constants/actions';

export default function global(state = initialState.global, action: AnyAction) {
  const { type, payload } = action;
  switch (type) {
    case MODE_CHANGED:
      return { ...state, mode: payload };
    default:
      return state;
  }
}
