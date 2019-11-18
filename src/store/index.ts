import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
import promise from 'redux-promise';
import reducers from '../reducers';
import { globalMiddleware, homeMiddleware } from '../middleware';

let middleware = [
  globalMiddleware,
  homeMiddleware,
  promise
];

const allMiddlewares = process.env.NODE_ENV === 'development' 
  ? composeWithDevTools(applyMiddleware(...middleware))
  : applyMiddleware(...middleware);

let store = createStore(reducers, {}, allMiddlewares);

export default store;
