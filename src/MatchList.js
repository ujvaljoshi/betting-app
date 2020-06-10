import React, { Component } from "react";
import Match from "./Match";
import matches from "./../matches.json";

class MatchList extends Component {
  render() {
    const matchList = matches.data.map((match, id) => {
      return (
        <li key={id}>
          <Match
            time={match.time}
            home={match.home}
            away={match.away}
            win={match.odds.win}
            loss={match.odds.loss}
            draw={match.odds.draw}
            setBet={this.props.setBet}
          />
        </li>
      );
    });
    return (
      <div className="matchlist">
        <ul>
          <h3>Match List</h3>
          {matchList}
        </ul>
      </div>
    );
  }
}

export default MatchList;
