import { createStore, applyMiddleware, Store } from 'redux';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '@reducers';
import { createWrapper } from 'next-redux-wrapper';
import { globalMiddleware, homeMiddleware } from '@middleware';
import { Store as State } from '@types';

const middleware = [globalMiddleware, homeMiddleware, promise];

const allMiddlewares =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

const makeStore = () => createStore(reducers, {}, allMiddlewares);

export const store = makeStore();
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
