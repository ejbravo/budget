import { combineReducers } from "redux";
import entryReducer from "./entryReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  entries: entryReducer,
  modals: modalReducer,
});
