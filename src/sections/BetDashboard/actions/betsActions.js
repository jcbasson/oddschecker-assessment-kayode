import { BETS_GET_LOAD_EVENT, BETS_GET_LOAD_ERROR } from "../constants";
import API from "../../../api/betsApi";
import {
  startLoading,
  finishLoading
} from "../../../common/actions/LoadingAction";

const getBetAction = payload => ({
  type: BETS_GET_LOAD_EVENT,
  payload
});

export const handleErrorAction = error => ({
  type: BETS_GET_LOAD_ERROR,
  payload: {
    ...error
  }
});

export function getBet({ id }) {
  return async dispatch => {
    dispatch(startLoading({ title: "event" }));
    try {
      const response = await API.getBets({ urlPath: "/event", id });
      dispatch(getBetAction(response));
      dispatch(finishLoading({ title: "event" }));
    } catch (err) {
      dispatch(finishLoading({ title: "event" }));
      dispatch(handleErrorAction({ errorMessage: "something went wrong " }));
    }
  };
}
