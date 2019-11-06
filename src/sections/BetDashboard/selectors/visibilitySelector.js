import { createSelector } from "reselect";
const visibilitySelector = state => state.betsReducer.visibility.selected;

export const getSelectectedDisplayFormatSelector = createSelector(
  visibilitySelector,
  selected => selected.displayFormat
);

export const getSelectedMarketNameSelector = createSelector(
  visibilitySelector,
  selected => selected.marketName
);
