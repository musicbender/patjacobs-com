import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import promise from 'redux-promise';
import reducer from '@reducers';
import { createWrapper } from 'next-redux-wrapper';
import { globalMiddleware, homeMiddleware } from '@middleware';
import { Store as State } from '@types';
import { useDispatch as useReduxDispatch } from 'react-redux';
import preloadedState from './initial-state';

const middleware = [globalMiddleware, homeMiddleware, promise];

const makeStore = () =>
  configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  });

export const store = makeStore();

export const wrapper = createWrapper<Store<State>>(() => store, { debug: true });

console.log('store', store.getState(), wrapper);

export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
