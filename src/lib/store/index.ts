import { Middleware, Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import promise from 'redux-promise';
import reducer from 'src/lib/reducers';
import { createWrapper } from 'next-redux-wrapper';
import { globalMiddleware } from '@middleware';
import { Store as State } from 'src/lib/types';
import { useDispatch as useReduxDispatch } from 'react-redux';
import preloadedState from './initial-state';
import { IS_DEV } from 'src/lib/constants/global';

const middleware: Middleware[] = [globalMiddleware, promise];

const makeStore = () =>
  configureStore({
    reducer,
    middleware,
    devTools: IS_DEV,
    preloadedState,
  });

export const store: Store = makeStore();

export const wrapper = createWrapper<Store<State>>(() => store, { debug: IS_DEV });

export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
