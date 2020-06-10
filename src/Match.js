import React from "react";

const Match = (props) => {
  return (
    <div className="match">
      <div className="time">
        <p>{props.time}</p>
      </div>

      <div className="teams">
        <p>{props.home}</p>
        <p>{props.away}</p>
      </div>

      <div className="odds">
        <button className="win" onClick={() => props.setBet(props.win)}>
          {props.win}
        </button>
        <button className="draw" onClick={() => props.setBet(props.draw)}>
          {props.draw}
        </button>
        <button className="loss" onClick={() => props.setBet(props.loss)}>
          {props.loss}
        </button>
      </div>
    </div>
  );
};

export default Match;
