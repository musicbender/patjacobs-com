import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reducers from '../reducers';
import { globalMiddleware, homeMiddleware } from '../middleware';

let middleware = [
  globalMiddleware,
  homeMiddleware,
  promise
];

let store;

if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  store = createStore(reducers, null, enhancer);
} else {
	store = createStore(reducers, preloadedState, applyMiddleware(...middleware));
}

export default store;
