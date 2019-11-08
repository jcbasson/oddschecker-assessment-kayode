import { createSelector } from "reselect";
import { getSelectedMarketNameSelector } from "./visibilitySelector";
import { filterAndSortMarkets, findByName } from "../../../utils";
import {
  BETS_MARKET_NAME_WINNER,
  BETS_MARKET_NAME_BOTH_TEAMS_TO_SCORE
} from "../constants";

const LoadingSelector = state => state.loadingReducer.event;
const betsSelector = state => state.betsReducer.bet;

export const getEventLoadinSelector = createSelector(
  LoadingSelector,
  event => event.isLoading
);

export const getEventErrorSelector = createSelector(betsSelector => {
  console.log(betsSelector);
});

export const getMarketsSelector = createSelector(
  betsSelector,
  bet => {
    return filterAndSortMarkets(bet.markets);
  }
);

export const getBothTeamsToScoreSelector = createSelector(
  [getMarketsSelector],
  markets => {
    return findByName(markets, BETS_MARKET_NAME_BOTH_TEAMS_TO_SCORE);
  }
);

export const getEventNameSelector = createSelector(
  [betsSelector],
  bet => {
    return bet.event;
  }
);

export const getSelectedMarketSelector = createSelector(
  [getMarketsSelector, getSelectedMarketNameSelector],
  (markets, selected) => {
    return selected === BETS_MARKET_NAME_WINNER
      ? findByName(markets, selected)
      : findByName(markets, selected);
  }
);
