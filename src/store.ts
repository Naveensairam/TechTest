// import { createStore } from "redux";
// import userDataReducer from "./Reducers/myReducer";
import {
    createStore,
    applyMiddleware,
    // compose
  } from 'redux';
  // import promise from 'redux-promise';
  import thunk from 'redux-thunk';
  // import logger from 'redux-logger';
  import userDataReducer from "./Reducers/myReducer";
  
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(
    userDataReducer,
    // composeEnhancers(
      applyMiddleware(thunk)
    // )
  );

// export default createStore(userDataReducer);