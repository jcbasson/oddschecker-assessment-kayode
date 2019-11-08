import { createSelector } from "reselect";
const visibilitySelector = state => state.betsReducer.visibility.selected;

export const getInitialValuesSelector = createSelector(
  visibilitySelector,
  initialvalues => initialvalues
);

export const getSelectectedDisplayFormatSelector = createSelector(
  visibilitySelector,
  selected => selected.displayFormat
);

export const getSelectedMarketNameSelector = createSelector(
  visibilitySelector,
  selected => selected.marketName
);
