import { combineReducers } from "redux";
import visibility from "./betsVisibilityReducer";
import bet from "./betsReducer";

export default combineReducers({
  visibility,
  bet
});
