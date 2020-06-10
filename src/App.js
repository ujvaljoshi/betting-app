import React, { useState } from "react";
import ReactDOM from "react-dom";
import MatchList from "./MatchList";
import BetSlip from "./BetSlip";

const App = () => {
  const [bet, setBet] = useState(0);
  return (
    <div>
      <h1>Betting App</h1>
      <div className="container">
        <MatchList setBet={setBet} />
        <BetSlip betValue={bet} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
