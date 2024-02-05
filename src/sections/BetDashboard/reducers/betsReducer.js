import { BETS_GET_LOAD_EVENT, BETS_GET_LOAD_ERROR } from "../constants";

const initialState = {
  markets: [],
  event: {
    awayName: "",
    eventName: "",
    homeName: "",
    startTime: ""
  },
  id: null,
  error: ""
};

export default function betsReducer(state = initialState, action) {
  switch (action.type) {
    case BETS_GET_LOAD_EVENT: {
      return {
        ...state,
        markets: action.payload.markets,
        event: {
          ...state.event,
          awayName: action.payload.awayName,
          eventName: action.payload.eventName,
          homeName: action.payload.homeName,
          startTime: action.payload.startTime
        },
        id: action.payload.id
      };
    }
    case BETS_GET_LOAD_ERROR: {
      return {
        errorMessage: action.payload.errorMessage
      };
    }
    default:
      return state;
  }
}
