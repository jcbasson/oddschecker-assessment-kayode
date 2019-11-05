import API from "../../../api/betsApi";
import {
  startLoading,
  finishLoading
} from "../../../common/actions/LoadingAction";

const getBetAction = payload => ({
  type: "GET_BET",
  payload
});

export function getBet({ id }) {
  return async dispatch => {
    dispatch(startLoading({ title: "event" }));
    try {
      const response = await API.getBets({ urlPath: "event", id });
      dispatch(finishLoading({ title: "event" }));
      dispatch(getBetAction(response));
    } catch (err) {
      dispatch(finishLoading({ title: "event" }));
      console.log(err);
    }
  };
}
