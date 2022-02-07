import { Middleware, Dispatch, AnyAction } from 'redux';
import { ABOUT_TOP_SET, RECENT_WORK_TOP_SET, SKILLS_TOP_SET } from 'constants/constants';

const homeMiddleware: Middleware<Dispatch> = () => (next: Dispatch<AnyAction>) => (
  action: AnyAction,
) => {
  const { type, payload } = action;
  switch (type) {
    case ABOUT_TOP_SET:
    case RECENT_WORK_TOP_SET:
    case SKILLS_TOP_SET: {
      const modifiedAction = action;
      const heightOffset = 123;

      if (payload.didResize) {
        modifiedAction.payload = Math.round(payload.value - 200 + (window.scrollY || 0));
      } else {
        modifiedAction.payload = payload.value - heightOffset;
      }

      next(modifiedAction);
      break;
    }
    default:
      next(action);
  }
};

export default homeMiddleware;
