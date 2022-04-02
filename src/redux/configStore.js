import { combineReducers, createStore } from "redux";
import BTDatVeXemPhimReducer from "./BTDatVeXemPhimReducer";
import OanTuXiReducer from "./OanTuXiReducer";

const rootReducer = combineReducers({
  BTDatVeXemPhimReducer,
  OanTuXiReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
