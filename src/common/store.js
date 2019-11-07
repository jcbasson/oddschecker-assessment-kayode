import { combineReducers } from "redux";
import betsReducer from "../sections/BetDashboard/reducers";
import loadingReducer from "./reducer/loadingReducer";

export default combineReducers({
  betsReducer,
  loadingReducer
});
