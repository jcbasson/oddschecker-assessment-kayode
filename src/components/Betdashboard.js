import React from "react";
import { homedir } from "os";

function BetDashboard() {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(undefined);
  const [isLoading, setLoading] = React.useState(false);

  const handleFetch = () => {
    setLoading(true);
    fetch("http://localhost:8765/event/1")
      .then(res => res.json())
      .then(
        data => {
          setError(undefined);
          setLoading(false);
          setData(data);
        },
        err => {
          setLoading(false);
          setError(err.message);
        }
      );
  };

  React.useEffect(() => {
    handleFetch();
  }, []);

  if (isLoading) return <h1>Loading....</h1>;
  if (!isLoading && error) return <h1>Something went wrong</h1>;
  if (data.markets) {
    // console.log(data.markets[0]);
  }

  const bookMakerCode = ["U2", "U3", "U5", "U6"];

  console.log(data);

  return (
    <div>
      =
      <div className="panel">
        <div className="panel__one">
          <h2>OddChecker</h2>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
          <input id="Decimal" value="decimal" type="radio" /> Decimal
          <input id="Fractional" value="fractional" type="radio" /> Fractional
        </div>
        <div className="panel__two">
          <ul className="bet-container">
            {data.markets &&
              data.markets[0].bets.map(item => {
                return (
                  <li
                    key={item.betId}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        padding: "0.5rem"
                      }}
                    >
                      {item.name}
                    </div>
                    {item.odds
                      .filter(odd => {
                        return bookMakerCode.includes(odd.bookmakerCode);
                      })
                      .map(od => {
                        return (
                          <div
                            key={od.bookmakerCode}
                            style={{
                              width: "100%",
                              border: "1px solid black",
                              padding: "0.5rem",
                              margin: "5px",
                              textAlign: "center"
                            }}
                          >
                            <span
                              style={{
                                fontWeight: "bold"
                              }}
                            >
                              {od.oddsDecimal}
                            </span>
                          </div>
                        );
                      })}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BetDashboard;
