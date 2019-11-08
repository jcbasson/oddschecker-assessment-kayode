export const sortBy = (items, property) => {
  return items.sort(function(a, b) {
    var nameA = a[property];
    var nameB = b[property];

    if (nameA === undefined) {
      throw new Error(`No property found for ${property} in your array`);
    }

    nameA.toLowerCase();
    nameB.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
};

export const filterAndSortMarkets = (markets = []) => {
  const result = markets.reduce((acc, current) => {
    const formattedMarket = {
      marketName: current.marketName,
      marketId: current.marketId,
      bets: current.bets.map(bet => {
        return {
          ...bet,
          odds: sortBy(bet.odds.filter(bet => !bet.suspended), "bookmakerCode")
        };
      })
    };
    return acc.concat(formattedMarket);
  }, []);
  return result;
};

export const findBy = (items, property) => {
  return items.find(item => item[property] === property);
};

export const findByName = (markets, marketName) => {
  return markets.find(
    market => market.marketName.toLowerCase() === marketName.toLowerCase()
  );
};

export const getSelectedBet = ({ bets = [], betId, bookmakerCode }) => {
  if (typeof betId !== "number") {
    throw new Error(`expected betId to be of type number`);
  }

  const { odds, name } = bets.find(bet => bet.betId === betId);
  return {
    name,
    odd: odds.find(odd => odd.bookmakerCode === bookmakerCode)
  };
};

export const calculatePotentialWinnings = (odd, stake) => {
  const [firstItem] = odd.split("/");
  return parseFloat(firstItem) * parseFloat(stake);
};

/*  CSS Media queries break point */
export const breakPoints = {
  tablets: "47.5rem" /* 768px */,
  laptop: "64rem" /* 1024px */,
  mobile: "29.25rem" /* 468px  */
};
