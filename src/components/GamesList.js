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
        src={
          props.game.img_logo_url
            ? `http://media.steampowered.com/steamcommunity/public/images/apps/${
                props.game.appid
              }/${props.game.img_logo_url}.jpg`
            : "../assets/steam-games.png"
        }
        alt={props.game.name}
      />
    </li>
  );
}

function GamesList(props) {
  const completed = props.games.completedGames.length > 0;
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
      {completed && (
        <li className="ListSection">
          <h3>Completed</h3>
        </li>
      )}
      {completed &&
        props.games.completedGames.map(game => {
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
