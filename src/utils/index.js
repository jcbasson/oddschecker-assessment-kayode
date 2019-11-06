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

export const filterAndSortMarkets = markets => {
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

export const findById = (markets, id) => {
  return markets.find(market => market.marketId === id);
};

export const findByName = (markets, marketName) => {
  return markets.find(
    market => market.marketName.toLowerCase() === marketName.toLowerCase()
  );
};
