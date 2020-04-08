import { combineReducers } from 'redux';

// reducers
import global from './reducer_global';
import home from './reducer_home';

const rootReducer = combineReducers({
    global,
    home,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
