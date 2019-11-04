import { combineReducers } from "redux";

export default combineReducers({
  auth: () => ({
    isAuthenticated: true,
    currentUser: { firstName: "kayode", lastName: "oyedeji" }
  })
});
