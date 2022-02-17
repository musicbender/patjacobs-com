import { createStore, applyMiddleware, Store } from 'redux';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '@reducers';
import { createWrapper, Context } from 'next-redux-wrapper';
import { globalMiddleware, homeMiddleware } from '@middleware';
import { Store as State } from '@types';

const middleware = [globalMiddleware, homeMiddleware, promise];

const allMiddlewares =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

const makeStore = (context: Context) => createStore(reducers, {}, allMiddlewares);

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
