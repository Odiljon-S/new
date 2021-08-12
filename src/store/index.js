import { createStore } from "redux";
import { combineReducers } from "redux";
import store from "./store";

const reducers = combineReducers({ store });
const stores = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default stores;
