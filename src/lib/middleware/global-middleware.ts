import { Middleware, Dispatch, MiddlewareAPI, Action } from 'redux';

const globalMiddleware: Middleware<Dispatch> =
  () => (next: Dispatch<Action>) => (action: Action) => {
    const { type } = action;
    switch (type) {
      default:
        return next(action);
    }
  };

export default globalMiddleware;
