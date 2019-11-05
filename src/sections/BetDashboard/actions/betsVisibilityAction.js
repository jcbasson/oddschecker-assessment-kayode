import { BETS_VISIBILITY_CHANGE } from "../constants";

const changeVisibiltyAction = payload => ({
  type: BETS_VISIBILITY_CHANGE,
  payload: {
    ...payload
  }
});

export const changeSelection = payload => {
  return dispatch => {
    dispatch(changeVisibiltyAction(payload));
  };
};

export default changeSelection;
