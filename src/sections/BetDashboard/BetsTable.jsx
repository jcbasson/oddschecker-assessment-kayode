import React from "react";
import PropTypes from "prop-types";
import { StyledTable } from "./styles/BetsDashboard-style";
import { BETS_DISPLAY_FORMAT_DECIMAL } from "./constants";

const getTableHeader = (items = [], property) => {
  return ["betName", ...items.map(item => item[property])];
};

function BetsTable({ selectedDisplayFormat, selectedMarket, onBetSelect }) {
  if (!selectedMarket) {
    return null;
  }

  const isDecimal = selectedDisplayFormat === BETS_DISPLAY_FORMAT_DECIMAL;

  const tableHead = getTableHeader(
    selectedMarket.bets[0].odds,
    "bookmakerCode"
  );

  const tableData = selectedMarket.bets.map(bet => {
    return (
      <tr key={bet.betId}>
        <td className="bet-title">{bet.name}</td>
        {bet.odds.map(odd => {
          return (
            <td
              key={odd.bookmakerCode}
              data-bk={odd.bookmakerCode}
              data-bid={bet.betId}
              className={`odd-title`}
              onClick={onBetSelect}
              style={{
                fontWeight:
                  odd.oddsDecimal >= bet.bestOpeningOddsDecimal && "bold"
              }}
            >
              {isDecimal ? odd.oddsDecimal : odd.oddsFractional}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <StyledTable>
      <tbody>
        <tr>
          {tableHead.map((item, i) => {
            return <th key={`${item}${i}`}>{item}</th>;
          })}
        </tr>
        {tableData}
      </tbody>
    </StyledTable>
  );
}

BetsTable.propTypes = {
  selectedDisplayFormat: PropTypes.string.isRequired,
  selectedMarket: PropTypes.shape({
    bets: PropTypes.array.isRequired,
    marketName: PropTypes.string.isRequired,
    marketId: PropTypes.number.isRequired
  })
};

export default BetsTable;
