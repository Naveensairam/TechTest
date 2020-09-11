import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';  

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
}

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
    // composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;