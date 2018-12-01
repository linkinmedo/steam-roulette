import React from "react";
import { connect } from "react-redux";
import { completeGame, uncompleteGame } from "../actions";

function Game(props) {
  return (
    <li className="ListGame">
      <p>{props.game.name}</p>
      <button
        onClick={() =>
          props.completeGame
            ? props.completeGame(props.game)
            : props.uncompleteGame(props.game)
        }
      >
        {props.completeGame ? "Complete" : "Uncomplete"}
      </button>
      <img
        src={`http://media.steampowered.com/steamcommunity/public/images/apps/${
          props.game.appid
        }/${props.game.img_logo_url}.jpg`}
        alt={props.game.name}
      />
    </li>
  );
}

function GamesList(props) {
  console.log("first", props);
  return (
    <ul className="GamesList">
      {props.games.uncompletedGames.map(game => {
        return (
          <Game
            game={game}
            completeGame={props.completeGame}
            key={game.appid}
          />
        );
      })}
      <li className="ListSection">
        <h3>Completed</h3>
      </li>
      {props.games.completedGames.map(game => {
        return (
          <Game
            game={game}
            uncompleteGame={props.uncompleteGame}
            key={game.appid}
          />
        );
      })}
    </ul>
  );
}

// export default Dashboard;
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user,
    games: state.games
  };
};

const mapDispatchToProps = { completeGame, uncompleteGame };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesList);
