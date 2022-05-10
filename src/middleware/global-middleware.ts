import { SCROLL_CURTAIN_CHANGED, IS_MOBILE_SET } from '@constants/global';
import { changeScrollCurtain } from '@actions/global';
import { isMobileSize } from '@util/util';
import { requestTimeout } from '@util/shims';
import { Middleware, Dispatch, AnyAction, MiddlewareAPI } from 'redux';
import settings from '@configs/settings.json';

const globalMiddleware: Middleware<Dispatch> =
  (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    const { type, payload } = action;
    switch (type) {
      case SCROLL_CURTAIN_CHANGED:
        next(action);
        const open = payload;
        if (open) {
          requestTimeout(() => {
            store.dispatch(changeScrollCurtain(false));
          }, settings.scrollCurtainDurations[0] * 1000);
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
  };

export default globalMiddleware;
