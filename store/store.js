import {applyMiddleware, legacy_createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './reducers/movieReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
});
const middleware = [thunk];

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middleware),
);
