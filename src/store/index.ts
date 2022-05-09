import { Middleware, Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import promise from 'redux-promise';
import reducer from '@reducers';
import { createWrapper } from 'next-redux-wrapper';
import { globalMiddleware, homeMiddleware } from '@middleware';
import { Store as State } from '@types';
import { useDispatch as useReduxDispatch } from 'react-redux';
import preloadedState from './initial-state';

const middleware: Middleware[] = [globalMiddleware, homeMiddleware, promise];
const isDevEnv: boolean = process.env.NODE_ENV === 'development';

const makeStore = () =>
  configureStore({
    reducer,
    middleware,
    devTools: isDevEnv,
    preloadedState,
  });

export const store: Store = makeStore();

export const wrapper = createWrapper<Store<State>>(() => store, { debug: isDevEnv });

export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
