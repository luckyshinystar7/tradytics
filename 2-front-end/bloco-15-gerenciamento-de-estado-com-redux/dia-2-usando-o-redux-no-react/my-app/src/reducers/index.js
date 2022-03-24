import { combineReducers } from "redux";
import myReducer from "./myReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
  myReducer,
  listReducer,
});

export default rootReducer;
