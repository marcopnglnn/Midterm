import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import uiReducer from "./reducers/uiReducer";
import appReducer from "./reducers/appReducer";

const reducer = combineReducers({
  ui: uiReducer,
  app: appReducer
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
  let store = createStoreWithMiddleware(reducer, initialState);
  return store;
}