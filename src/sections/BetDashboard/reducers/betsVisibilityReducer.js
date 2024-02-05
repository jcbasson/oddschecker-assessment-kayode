import {
  BETS_VISIBILITY_CHANGE,
  BETS_DISPLAY_FORMAT_DECIMAL,
  BETS_MARKET_NAME_WINNER
} from "../constants";

const initialState = {
  selected: {
    marketName: BETS_MARKET_NAME_WINNER,
    displayFormat: BETS_DISPLAY_FORMAT_DECIMAL
  }
};

export default function betVisibiltyReducer(state = initialState, action) {
  switch (action.type) {
    case BETS_VISIBILITY_CHANGE: {
      return {
        ...state,
        selected: {
          ...state.selected,
          marketName: action.payload.marketName,
          displayFormat: action.payload.displayFormat
        }
      };
    }
    default:
      return state;
  }
}
