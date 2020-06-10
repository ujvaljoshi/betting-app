import React, { useState, useEffect } from "react";

const BetSlip = (props) => {
  const [amount, setAmount] = useState(0);
  const [win, setWin] = useState(props.betValue * amount);

  useEffect(() => {
    setWin(Number(props.betValue) * Number(amount));
  }, [props.betValue, amount]);

  return (
    <div className="betslip">
      <h3>Bet Slip</h3>
      <div className="slip">
        <p>Odds @{props.betValue}</p>
        <form>
          <label htmlFor="amount">
            <input
              type="text"
              id="amount"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </form>
        <p>Expected winning @{parseInt(win)}</p>
      </div>
    </div>
  );
};

export default BetSlip;
