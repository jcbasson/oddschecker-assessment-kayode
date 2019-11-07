import { START_LOADING, FINISH_LOADING } from "../constants";

const intialState = {
  event: {
    isLoading: true
  }
};

export default function loadingReducer(state = intialState, action) {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        [action.payload.title]: {
          isLoading: true
        }
      };
    }
    case FINISH_LOADING: {
      return {
        ...state,
        [action.payload.title]: {
          isLoading: false
        }
      };
    }
    default:
      return state;
  }
}
