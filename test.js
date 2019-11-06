const odds = [
  {
    bookmakerBetId: "13451672",
    bookmakerCode: "U7",
    eachWayTerms: "",
    movement: "none",
    oddsDecimal: 2.15,
    oddsFractional: "15/13",
    oddsUS: 115,
    openingOddsDecimal: 2.15,
    suspended: false
  },
  {
    bookmakerBetId: "1859582068",
    bookmakerCode: "U4",
    eachWayTerms: "",
    movement: "none",
    oddsDecimal: 2.15,
    oddsFractional: "23/20",
    oddsUS: 114,
    openingOddsDecimal: 2.15,
    suspended: false
  }
];

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];

// sort by name
const something = items => {
  return items.sort(function(a, b) {
    var nameA = a.bookmakerCode.toUpperCase(); // ignore upper and lowercase
    var nameB = b.bookmakerCode.toUpperCase(); // ignore upper and lowercase
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
