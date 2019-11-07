export const BETS_VISIBILITY_CHANGE = "BETS_VISIBILITY_CHANGE";
export const BETS_DISPLAY_FORMAT_DECIMAL = "decimal";
export const BETS_DISPLAY_FORMAT_FRACTION = "fraction";
export const BETS_MARKET_NAME_WINNER = "winner";
export const BETS_MARKET_NAME_BOTH_TEAMS_TO_SCORE = "both teams to score";

export const BETS_RADIO_OPTIONS = [
  { value: BETS_DISPLAY_FORMAT_DECIMAL, label: "Decimal" },
  { value: BETS_DISPLAY_FORMAT_FRACTION, label: "Fraction" }
];

export const BETS_SELECT_OPTIONS = [
  { value: BETS_MARKET_NAME_WINNER, label: "Winner" },
  {
    value: BETS_MARKET_NAME_BOTH_TEAMS_TO_SCORE,
    label: "Both teams to score"
  }
];
