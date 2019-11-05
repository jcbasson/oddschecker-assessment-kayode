const initialState = {
  markets: [],
  event: {},
  id: null
};

export default function betsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BET": {
      return {
        ...state,
        id: action.payload.id,
        markets: action.payload.markets,
        event: {
          awayName: action.payload.awayName,
          eventName: action.payload.eventName,
          homeName: action.payload.homeName,
          startTime: action.payload.startTime
        }
      };
    }
    default:
      return state;
  }
}
