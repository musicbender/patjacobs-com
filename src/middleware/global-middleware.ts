import { TRANSPORT_CHANGED, IS_MOBILE_SET } from '../constants/constants';
import { changeTransport } from '../actions/global';
import { isMobileSize } from '../util/util';
import { requestTimeout } from '../util/shims';
import { Middleware, Dispatch, AnyAction, MiddlewareAPI } from 'redux';

// TEMP
var transportDuration = 2500;

const globalMiddleware: Middleware<Dispatch> = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case TRANSPORT_CHANGED:
      next(action);
      if (!!payload) {
        console.log('mw: change transport', payload);
        requestTimeout(() => {
          console.log('mw: change transport', false);
          store.dispatch(changeTransport(false))
        }, transportDuration);
      }
      break;
    case IS_MOBILE_SET:
      const newAction = action;
      newAction.payload = isMobileSize();
      next(newAction);
      break;
    default:
      return next(action);
  }
}

export default globalMiddleware;
