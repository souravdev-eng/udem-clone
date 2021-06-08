import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import courseReducer from './reducers/courseReducer';

const rootReducer = combineReducers({
  course: courseReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
