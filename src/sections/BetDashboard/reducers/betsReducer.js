const initialState = {
  markets: [],
  event: {
    awayName: "",
    eventName: "",
    homeName: "",
    startTime: ""
  },
  id: null
};

export default function betsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BET": {
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
    default:
      return state;
  }
}
